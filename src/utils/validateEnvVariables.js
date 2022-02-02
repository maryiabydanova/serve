import envalid from "envalid";

const concatEnvVariableErrors = (errors) => {
  let concatErrors = "Environment Variable Validation Error.";
  for (const [envVar, err] of Object.entries(errors)) {
    if (err instanceof envalid.EnvError) {
      concatErrors += `\n* ${err.message}.`;
    } else if (err instanceof envalid.EnvMissingError) {
      concatErrors += `\n* ${envVar} is missing.`;
    }
  }
  return concatErrors;
};

export default () => {
  try {
    envalid.cleanEnv(
      process.env,
      {
        PORT: envalid.port(),
        NODE_ENV: envalid.str({ choices: ["development", "test", "production"] }),
        DB_HOST: envalid.host(),
        DB_PORT: envalid.port(),
        DB_NAME: envalid.str(),
        DB_USERNAME: envalid.str(),
        DB_PASSWORD: envalid.str(),
      },
      {
        reporter: ({ errors }) => {
          if (Object.keys(errors).length !== 0) {
            const errorStr = concatEnvVariableErrors(errors);
            throw errorStr;
          }
        },
      }
    );
    console.log("Environment variables validated successfully.");
    return true;
  } catch (error) {
    throw error;
  }
};
