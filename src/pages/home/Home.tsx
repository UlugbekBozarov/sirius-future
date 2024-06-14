import { Trans } from "react-i18next";
import {
  Avatar,
  Box,
  Button,
  Card,
  Grid,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import { get } from "lodash";
import dayjs from "dayjs";

import { Homework, Reports, User } from "assets/icons";

import { StyledScroll } from "./Home.style";

const activities = [
  {
    id: 1,
    labelKey: "Mental Arithmetic",
    balance: 32,
  },
  {
    id: 2,
    labelKey: "Programming",
    balance: 0,
  },
  {
    id: 3,
    labelKey: "Скорочтение",
    balance: 4,
  },
  {
    id: 4,
    labelKey: "Mental Arithmetic",
    balance: 32,
  },
  {
    id: 5,
    labelKey: "Programming",
    balance: 0,
  },
  {
    id: 6,
    labelKey: "Скорочтение",
    balance: 4,
  },
];

const lessons = [
  {
    id: 1,
    date: "Wed May 01 2024",
    fromTime: "Wed May 01 2024 14:00:00",
    toTime: "Wed May 01 2024 14:25:00",
    labelKey: "Mental Arithmetic",
    employee: "Белкина Инна",
  },
  {
    id: 2,
    date: "Wed Oct 30 2024",
    fromTime: "Wed Oct 30 2024 11:00:00",
    toTime: "Wed Oct 30 2024 11:11:00",
    labelKey: "Programming",
    employee: "Животновская Оксана",
  },
  {
    id: 3,
    date: "Sat Nov 16 2024",
    fromTime: "Sat Nov 16 2024 09:00:00",
    toTime: "Sat Nov 16 2024 09:45:00",
    labelKey: "Speed ​​reading",
    employee: "Мин Елена",
  },
];

const Home = () => {
  return (
    <Box>
      <Grid container spacing="20px">
        <Grid item xs={12} md={12} lg={6}>
          <Card
            sx={{
              height: "100%",
              background:
                "#7362BC url(images/bg.png) no-repeat center right -180px",
              backgroundSize: "auto 440px",
            }}
          >
            <Box color="white" p="56px 40px">
              <Typography
                maxWidth="75%"
                fontSize="32px"
                lineHeight="32px"
                fontWeight="400"
                mb="12px"
              >
                <Trans>Until December 31, any course with a 20% discount</Trans>
              </Typography>
              <Typography
                maxWidth="70%"
                fontSize="16px"
                lineHeight="20px"
                fontWeight="300"
              >
                <Trans>
                  Until the end of the year, you have a unique opportunity to
                  take advantage of our New Year's 20% discount on any course!
                </Trans>
              </Typography>
            </Box>
          </Card>
        </Grid>
        <Grid item xs={12} sm={8} lg={4}>
          <Card sx={{ height: "100%", backgroundColor: "#FFF1CB" }}>
            <Box textAlign="center" color="#323854" p="32px">
              <Typography maxWidth="200px" variant="h6" mx="auto" mb="32px">
                <Trans>Next lesson starts in:</Trans>
              </Typography>
              <Box mb="32px">
                <Stack direction="row" justifyContent="center" spacing="12px">
                  <Typography fontSize="36px" lineHeight="35px">
                    6&nbsp;
                    <Typography
                      fontSize="15px"
                      lineHeight="20px"
                      component="small"
                    >
                      <Trans>d</Trans>
                    </Typography>
                  </Typography>
                  <Typography fontSize="36px" lineHeight="35px">
                    12&nbsp;
                    <Typography
                      fontSize="15px"
                      lineHeight="20px"
                      component="small"
                    >
                      <Trans>h</Trans>
                    </Typography>
                  </Typography>
                  <Typography fontSize="36px" lineHeight="35px">
                    24&nbsp;
                    <Typography
                      fontSize="15px"
                      lineHeight="20px"
                      component="small"
                    >
                      <Trans>min</Trans>
                    </Typography>
                  </Typography>
                </Stack>
              </Box>
              <Button
                size="large"
                variant="outlined"
                sx={{
                  color: "inherit",
                  minWidth: "220px",
                  borderStyle: "dashed",
                  borderColor: "inherit",
                }}
              >
                <Trans>Button</Trans>
              </Button>
            </Box>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4} lg={2}>
          <Box
            display="flex"
            flexDirection={{ xs: "row", sm: "column" }}
            height="100%"
            gap="20px"
          >
            <Box minHeight="calc(50% - 10px)" minWidth="calc(50% - 10px)">
              <Card
                sx={{
                  minHeight: "100%",
                  backgroundColor: "#D8ECFF",
                  borderRadius: "20px",
                }}
              >
                <Box p="16px 12px 12px 16px">
                  <Typography variant="h6" maxWidth="100px" mb="6px">
                    <Trans>Homeworks</Trans>
                  </Typography>
                  <Box display="flex" justifyContent="flex-end">
                    <Box
                      width="40px"
                      height="40px"
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                      borderRadius="12px"
                      bgcolor="white"
                      color="#323854"
                    >
                      <Homework />
                    </Box>
                  </Box>
                </Box>
              </Card>
            </Box>
            <Box minHeight="calc(50% - 10px)" minWidth="calc(50% - 10px)">
              <Card
                sx={{
                  minHeight: "100%",
                  backgroundColor: "#E8CBFF",
                  borderRadius: "20px",
                }}
              >
                <Box p="16px 12px 12px 16px">
                  <Typography maxWidth="100px" variant="h6" mb="6px">
                    <Trans>Reports from teachers</Trans>
                  </Typography>
                  <Box display="flex" justifyContent="flex-end">
                    <Box
                      width="40px"
                      height="40px"
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                      borderRadius="12px"
                      bgcolor="white"
                      color="#323854"
                    >
                      <Reports />
                    </Box>
                  </Box>
                </Box>
              </Card>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} lg={4}>
          <Card sx={{ border: "1px solid #7362BC" }}>
            <Box p="28px 4px">
              <Typography variant="h5" px="24px" mb="16px">
                <Trans>Activities balance</Trans>
              </Typography>
              <StyledScroll
                maxHeight="200px"
                overflow="auto"
                px="24px"
                mb="36px"
              >
                <Table>
                  <TableBody>
                    {activities?.map((activity) => (
                      <TableRow key={get(activity, "id")}>
                        <TableCell height="64px">
                          <Typography>
                            <Trans>{get(activity, "labelKey")}</Trans>
                          </Typography>
                        </TableCell>
                        <TableCell padding="checkbox">
                          <Avatar
                            sx={{
                              fontSize: "20px",
                              lineHeight: "25px",
                              backgroundColor: "#EEEEFF",
                              color: "#323854",
                            }}
                          >
                            {get(activity, "balance", 0)}
                          </Avatar>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </StyledScroll>
              <Box px="24px">
                <Button fullWidth>
                  <Trans>Button</Trans>
                </Button>
              </Box>
            </Box>
          </Card>
        </Grid>
        <Grid item xs={12} lg={8}>
          <Card sx={{ border: "1px solid #7362BC" }}>
            <Box p="28px">
              <Typography variant="h5" mb="16px">
                <Trans>Upcoming lessons</Trans>
              </Typography>
              <StyledScroll overflow="auto" mb="36px">
                <Table>
                  <TableBody>
                    {lessons?.map((lesson) => (
                      <TableRow key={get(lesson, "id")}>
                        <TableCell
                          sx={{
                            width: "42px",
                            height: "64px",
                            textAlign: "center",
                            padding: "0px",
                          }}
                        >
                          <Typography variant="h4">
                            {dayjs(get(lesson, "date")).format("D")}
                          </Typography>
                          <Typography variant="caption">
                            <Trans>
                              {dayjs(get(lesson, "date")).format("MMMM")}
                            </Trans>
                          </Typography>
                        </TableCell>
                        <TableCell
                          sx={{ width: "216px", padding: "0px 0px 0px 16px" }}
                        >
                          <Typography variant="body1">
                            <Trans>{get(lesson, "labelKey")}</Trans>
                          </Typography>
                        </TableCell>
                        <TableCell sx={{ padding: "9px" }}>
                          <Stack
                            direction="row"
                            alignItems="center"
                            spacing="6px"
                          >
                            <Typography variant="caption" width="70px">
                              {dayjs(get(lesson, "fromTime")).format("hh:mm")}-
                              {dayjs(get(lesson, "toTime")).format("hh:mm")}
                            </Typography>
                            <User />
                            <Typography variant="caption">
                              <Trans>{get(lesson, "employee")}</Trans>
                            </Typography>
                          </Stack>
                        </TableCell>
                        <TableCell sx={{ padding: "9px" }}>
                          <Stack direction="row" spacing="4px">
                            <Button size="small" variant="outlined">
                              <Trans>Button</Trans>
                            </Button>
                            <Button size="small" variant="contained">
                              <Trans>Button</Trans>
                            </Button>
                          </Stack>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </StyledScroll>
              <Box display="flex" justifyContent="center">
                <Button fullWidth sx={{ maxWidth: "344px" }}>
                  <Trans>Button</Trans>
                </Button>
              </Box>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
