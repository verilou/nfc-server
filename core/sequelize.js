const { Sequelize } = require('sequelize');
const {
	SecretsManagerClient,
	GetSecretValueCommand,
} = require('@aws-sdk/client-secrets-manager');

const secret_rds = process.env.SECRET_RDS;
const secret_db_host = process.env.SECRET_DB_HOST;

const client = new SecretsManagerClient({
	region: 'eu-west-1',
});

module.exports = (async () => {
	try {
        console.log(process.env)
		const secrets = await Promise.all([
			client.send(
				new GetSecretValueCommand({
					SecretId: secret_rds,
					VersionStage: 'AWSCURRENT', // VersionStage defaults to AWSCURRENT if unspecified
				})
			),
			client.send(
				new GetSecretValueCommand({
					SecretId: secret_db_host,
					VersionStage: 'AWSCURRENT', // VersionStage defaults to AWSCURRENT if unspecified
				})
			),
		]);
        console.log("DEBUG")
		const secretParsed = {};
		secrets.forEach((secret) => {
			secretParsed[secret.Name] = JSON.parse(secret.SecretString);
		});
		return new Sequelize(
			secretParsed[secret_db_host].DB_NAME,
			secretParsed[secret_rds].username,
			secretParsed[secret_rds].password,
			{
				host: secretParsed[secret_db_host].HOST,
				dialect: 'postgres',
				define: {
					freezeTableName: true,
				},
				ssl: true,
				dialectOptions: {
					ssl: {
						require: true,
						rejectUnauthorized: false,
					},
				},
				logging: false,
			}
		);
	} catch (error) {
		console.log(error, 'ERROR FROM CONNECT');
	}
})();
