import { useMemo } from "react";
import { Trans, useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  List,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import { get } from "lodash";

import {
  Achievements,
  CheckConnection,
  ExerciseEquipment,
  Gift,
  Home,
  LargeLogo,
  Library,
  Payment,
  Questions,
  Schedule,
  Settings,
} from "assets/icons";
import { StyledListItemButton } from "./DrawerContend.style";

const navigateList = [
  {
    id: "home",
    link: "/",
    labelKey: "Home",
    icon: <Home />,
  },
  {
    id: "schedule",
    link: "/schedule",
    labelKey: "Schedule",
    icon: <Schedule />,
  },
  {
    id: "payment",
    link: "/payment",
    labelKey: "Payment",
    icon: <Payment />,
  },
  {
    id: "achievements",
    link: "/achievements",
    labelKey: "Achievements",
    icon: <Achievements />,
  },
  {
    id: "exerciseEquipment",
    link: "/exercise-equipment",
    labelKey: "Exercise equipment",
    icon: <ExerciseEquipment />,
  },
  {
    id: "library",
    link: "/library",
    labelKey: "Library",
    icon: <Library />,
  },
  {
    id: "checkConnection",
    link: "/check-connection",
    labelKey: "Check connection",
    icon: <CheckConnection />,
  },
  {
    id: "settings",
    link: "/Settings",
    labelKey: "Settings",
    icon: <Settings />,
  },
  {
    id: "questions",
    link: "/questions",
    labelKey: "Questions",
    icon: <Questions />,
  },
];

const DrawerContend = () => {
  const { t } = useTranslation();

  const location = useLocation();
  const navigate = useNavigate();

  const activeLocation = useMemo(() => {
    return location.pathname.split("/")[1];
  }, [location]);

  const goTo = (link: string) => () => {
    navigate(link);
  };

  return (
    <Box
      height="100vh"
      padding={{ md: "24px 0px 24px 50px" }}
      sx={{ overflowY: "auto" }}
    >
      <Box
        height={{ xs: "100vh", md: "auto" }}
        bgcolor="#EEEEFF"
        borderRadius={{ md: "30px" }}
      >
        <Box display="flex" justifyContent="center" padding="44px 20px 32px">
          <Toolbar>
            <LargeLogo />
          </Toolbar>
        </Box>
        <List>
          {navigateList.map((item) => (
            <StyledListItemButton
              selected={`/${activeLocation}` === get(item, "link")}
              onClick={goTo(get(item, "link"))}
              sx={{ paddingLeft: "28px" }}
              key={get(item, "id")}
            >
              <ListItemIcon
                color="red"
                sx={{ display: "flex", justifyContent: "center" }}
              >
                {get(item, "icon", "")}
              </ListItemIcon>
              <ListItemText primary={t(`${get(item, "labelKey")}`)} />
            </StyledListItemButton>
          ))}
        </List>
        <Box padding="42px 20px 24px">
          <Box
            position="relative"
            height="128px"
            overflow="hidden"
            bgcolor="white"
            borderRadius="15px"
            padding="16px 16px 10px"
          >
            <Typography fontSize="16px" lineHeight="20px" mb="4px">
              <Trans>Learn for free</Trans>
            </Typography>
            <Typography fontSize="10px" lineHeight="12px" mb="10px">
              <Trans>
                Bring your friends with children to study at Sirius Future and
                receive gifts!
              </Trans>
            </Typography>
            <Button
              sx={{
                width: "68px",
                height: "32px",
                fontSize: "12px",
                borderRadius: "15px",
                backgroundColor: "#D8ECFF",
                color: "#323854",
              }}
            >
              <Trans>To know</Trans>
            </Button>
            <Box position="absolute" top="60px" left="123px">
              <Gift />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default DrawerContend;
