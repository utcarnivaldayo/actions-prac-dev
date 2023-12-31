// import { Link } from "react-router-dom";
// import Paths from "../../paths";
import { Page } from "../../components/Page";
import Container from '@mui/material/Container';
import { Typography } from "@mui/material";
import Box from '@mui/material/Box';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import Paper from '@mui/material/Paper';
import MyIcon from '../../assets/speaker256.gif';
import Stack from '@mui/material/Stack';
import BadgeIcon from '@mui/icons-material/Badge';
import CodeIcon from '@mui/icons-material/Code';
import PersonIcon from '@mui/icons-material/Person';
import ContactMailIcon from '@mui/icons-material/ContactMail';

const ProfileView: React.FC = () => {
    return (
        <Page>

            <Container fixed>
                <Paper>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 140 }}>
                        <ContactPageIcon sx={{ fontSize: 80, p: 1, m: 1 }} />
                        <Typography variant="h2" component="h2">
                            Profile
                        </Typography>
                    </Box>

                    <Stack
                        direction={{ sm: 'column', md: 'row' }}
                        justifyContent='space-evenly'
                        alignItems='center'
                        spacing={{ xs: 3, sm: 3 }}
                    >
                        <Box>
                            <Box sx={{ borderRadius: '50%', borderColor: 'inherit', border: 3, p: 2, bgcolor: '#eeeeee' }} maxWidth={256} >
                                <Box component="img" height={180} src={MyIcon} />
                            </Box>
                            <Typography component="div" color='inherit' align="center">
                                ut
                            </Typography>
                        </Box>

                        <Box>
                            <Stack
                                direction={{ xs: 'row' }}
                                justifyContent="flex-start"
                                alignItems='start'
                            >
                                <PersonIcon sx={{ fontSize: 34, mt: 0.5, mr: 1 }} />
                                <Typography variant="h4" component="h4">
                                    ut
                                    <Typography component="div">
                                        <ul>
                                            <li>埼玉県出身</li>
                                            <li>理系私大を工学修士で修了し、現在モバイルゲーム会社に在籍</li>
                                            <li>趣味はゲーム・アニメ・心霊系動画の鑑賞</li>
                                            <li><a href="https://coten.co.jp/cotencrew/" >Cotencrew</a></li>
                                        </ul>
                                    </Typography>
                                </Typography>
                            </Stack>
                            <Stack
                                direction={{ xs: 'row' }}
                                justifyContent="flex-start"
                                alignItems='start'
                            >
                                <CodeIcon sx={{ fontSize: 34, mt: 0.75, mr: 1 }} />
                                <Typography variant="h4" component="h4">
                                    server side engineer
                                    <Typography component="div">
                                        <ul>
                                            <li>モバイルゲームの運用・業務改善(shell, python, jenkins)を担当</li>
                                            <li>プライベートではrustをよく使用</li>
                                            <li>最近はreactやawsを勉強中...</li>
                                        </ul>
                                    </Typography>
                                </Typography>
                            </Stack>
                            <Stack
                                direction={{ xs: 'row' }}
                                justifyContent="flex-start"
                                alignItems='start'
                            >
                                <BadgeIcon sx={{ fontSize: 34, mt: 0.5, mr: 1 }} />
                                <Typography variant="h4" component="h4">
                                    certificate
                                    <Typography component="div">
                                        <ul>
                                            <li>ITパスポート</li>
                                            <li>基本情報処理技術者</li>
                                        </ul>
                                    </Typography>
                                </Typography>
                            </Stack>
                            <Stack
                                direction={{ xs: 'row' }}
                                justifyContent="flex-start"
                                alignItems='start'
                            >
                                <ContactMailIcon sx={{ fontSize: 32, mt: 0.75, mr: 1 }} />
                                <Typography variant="h4" component="h4">
                                    contact
                                    <Typography component="div">
                                        <ul>
                                            <li><a href="mailto:ut.numagotatu@gmail.com">ut.numagotatu@gmail.com</a></li>
                                        </ul>
                                    </Typography>
                                </Typography>
                            </Stack>
                            <Box sx={{ m: 5 }} />
                        </Box>
                    </Stack>
                </Paper>
            </Container >
        </Page >
    );
}

export default ProfileView;
