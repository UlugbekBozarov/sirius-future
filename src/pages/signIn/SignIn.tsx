import { useState } from "react";
import { Trans, useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { FormProvider, useForm } from "react-hook-form";
import {
  Alert,
  Box,
  Button,
  CircularProgress,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { get } from "lodash";

import { Logo, Visibility, VisibilityOff } from "assets/icons";
import { ControlledCheckbox, ControlledInput } from "components/controller";
import { getLanguage, setLanguage } from "services/storage/custom";
import { encodeJWT, generateJWT } from "services/jwt";
import { setItemCookie } from "services/storage";
import { STORAGE_NAMES } from "constants/Storage.constants";

const formNames = {
  username: "email",
  password: "password",
  rememberMe: "rememberMe",
  visibility: "visibility",
  language: "lang",
};

const loginData = {
  [formNames.username]: "demo@test.com",
  [formNames.password]: "demo1234",
};

const SignIn = () => {
  const { t, i18n } = useTranslation();

  const [loading, setLoading] = useState<boolean>(false);

  const formStore = useForm({
    defaultValues: {
      [formNames.username]: loginData[formNames.username],
      [formNames.password]: loginData[formNames.password],
      [formNames.rememberMe]: false,
      [formNames.visibility]: false,
      [formNames.language]: getLanguage(),
    },
  });

  const { watch, setValue, setError, handleSubmit } = formStore;

  const handleChangeVisibility = () => {
    setValue(formNames.visibility, !watch(formNames.visibility));
  };

  const submitHandler = handleSubmit(async (data) => {
    setLoading(true);
    if (
      get(data, formNames.username) === get(loginData, formNames.username) &&
      get(data, formNames.password) === get(loginData, formNames.password)
    ) {
      const token = generateJWT();
      const tokenData = encodeJWT(token);

      await setTimeout(() => {
        setItemCookie(
          STORAGE_NAMES.authorization,
          token,
          get(data, formNames.rememberMe, false)
            ? {
                expires: new Date(
                  new Date().getTime() + get(tokenData, "expires")
                ).toUTCString(),
              }
            : {}
        );

        window.location.href = "/";
      }, 1000);
    } else {
      await setTimeout(() => {
        setError(formNames.username, {
          type: "deps",
          message: t("E-mail or password is incorrect"),
        });
        setError(formNames.password, {
          type: "deps",
          message: t("E-mail or password is incorrect"),
        });
        setLoading(false);
      }, 1000);
    }
  });

  const handleChangeLanguage = (language: string) => () => {
    i18n.changeLanguage(language);
    setValue(formNames.language, language);
    setLanguage(language);
  };

  return (
    <FormProvider {...formStore}>
      <form onSubmit={submitHandler}>
        <Box minHeight="100vh" display="flex" justifyContent="center">
          <Box width="100%" maxWidth="340px" height="100%">
            <Box
              minHeight="calc(100vh - 84px)"
              display="flex"
              alignItems="center"
            >
              <Box width="100%">
                <Box display="flex" justifyContent="center" mb="32px">
                  <Logo />
                </Box>
                <Box display="flex" justifyContent="center" mb="16px">
                  <Typography variant="h3">
                    <Trans>Login to Sirius Future</Trans>
                  </Typography>
                </Box>
                <Box mb="16px">
                  <Alert severity="info">
                    <Trans
                      values={{
                        email: "demo@test.com",
                        password: "demo1234",
                      }}
                    >
                      Use email / password
                    </Trans>
                  </Alert>
                </Box>
                <Box mb="12px">
                  <ControlledInput
                    labelKey="E-mail"
                    name={formNames.username}
                  />
                </Box>
                <Box mb="16px">
                  <ControlledInput
                    type={watch(formNames.visibility) ? "text" : "password"}
                    labelKey="Password"
                    name={formNames.password}
                    endAdornment={
                      <IconButton onClick={handleChangeVisibility}>
                        {watch(formNames.visibility) ? (
                          <Visibility />
                        ) : (
                          <VisibilityOff />
                        )}
                      </IconButton>
                    }
                  />
                </Box>
                <Box mb="36px">
                  <ControlledCheckbox
                    labelKey="Remember me"
                    name={formNames.rememberMe}
                  />
                </Box>
                <Box mb="6px">
                  <Button
                    fullWidth
                    type="submit"
                    size="large"
                    variant="contained"
                    disabled={loading}
                    startIcon={
                      loading && (
                        <CircularProgress size="16px" color="inherit" />
                      )
                    }
                  >
                    <Trans>Login</Trans>
                  </Button>
                </Box>
                <Box mb="64px">
                  <Stack
                    height="40px"
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Link
                      to="/"
                      style={{ color: "#008AFF", textDecoration: "none" }}
                    >
                      <Trans>I forgot password</Trans>
                    </Link>
                    <Link
                      to="/"
                      style={{ color: "#008AFF", textDecoration: "none" }}
                    >
                      <Trans>Login as a coach</Trans>
                    </Link>
                  </Stack>
                </Box>
                <Box textAlign="center">
                  <Typography>
                    <Trans>Don't have an account?</Trans>
                  </Typography>
                  <Typography>
                    <Link
                      to="/"
                      style={{ color: "#008AFF", textDecoration: "none" }}
                    >
                      <Trans>Register</Trans>
                    </Link>
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box height="84px">
              <Stack direction="row" justifyContent="center">
                <IconButton
                  color="primary"
                  onClick={handleChangeLanguage("ru")}
                  sx={{
                    width: "50px",
                    height: "50px",
                    fontSize:
                      watch(formNames.language) === "ru" ? "24px" : "16px",
                  }}
                >
                  RU
                </IconButton>
                <IconButton
                  color="primary"
                  onClick={handleChangeLanguage("en")}
                  sx={{
                    width: "50px",
                    height: "50px",
                    fontSize:
                      watch(formNames.language) === "en" ? "24px" : "16px",
                  }}
                >
                  EN
                </IconButton>
              </Stack>
            </Box>
          </Box>
        </Box>
      </form>
    </FormProvider>
  );
};

export default SignIn;
