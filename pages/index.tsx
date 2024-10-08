import { GetStaticProps, NextPage } from 'next'
import {
    FaExternalLinkAlt,
    FaGithub,
    FaTelegramPlane,
    FaEnvelope,
    FaWikipediaW,
    FaCreativeCommons,
} from 'react-icons/fa'
import { IoBulb, IoGitBranch, IoImage } from 'react-icons/io5'
import { AccountShowcase } from '../components/display/accounts'
import { Footer, FooterParagraph } from '../components/display/footer'
import { Header, ProfileAddonGroup, ProfileAddonGroupTitle, ProfileAddons } from '../components/display/header'
import { Monoline, MonolineGroup } from '../components/display/monolines'
import { Row } from '../components/layout'
import { Description, Paragraph } from '../components/typography'
import ProfilePicture from '../public/assets/images/profile.webp'
import Background from '../public/assets/images/background.webp'

const DEPLOY_TARGETS = ['demo', 'prod'] as const
type DeployTarget = (typeof DEPLOY_TARGETS)[number]

type IndexPageProps = {
    deployTarget: DeployTarget
}

const IndexPage: NextPage = ({ deployTarget }: IndexPageProps) => {
    return (
        <div className="container">
            <Header
                profilePicture={ProfilePicture}
                profileName={
                    <>
                        {/* Phrinky */}
                        Phrinky
                    </>
                }
                profileSource="https://www.pixiv.net/artworks/97558489"
            >
                <ProfileAddons>
                    <ProfileAddonGroup>
                        <ProfileAddonGroupTitle>Aka.</ProfileAddonGroupTitle>
                        <MonolineGroup>
                            <Monoline comment="since 2010">Ricky8955555</Monoline>
                            <Monoline comment="since 201?">Mokingboom</Monoline>
                            <Monoline comment="since 202?">Rkmiao</Monoline>
                        </MonolineGroup>
                    </ProfileAddonGroup>
                    <ProfileAddonGroup>
                        <ProfileAddonGroupTitle>Languages</ProfileAddonGroupTitle>
                        <MonolineGroup>
                            <Monoline comment="native, primary">zh-cmn-Hans</Monoline>
                            <Monoline comment="native, primary">zh-yue-Hans</Monoline>
                            <Monoline comment="installed">en-{'{US,GB}'}</Monoline>
                            <Monoline comment="installing">ja</Monoline>
                        </MonolineGroup>
                    </ProfileAddonGroup>
                    <ProfileAddonGroup>
                        <ProfileAddonGroupTitle>Education</ProfileAddonGroupTitle>
                        <MonolineGroup>
                            <Monoline>Undergraduate</Monoline>
                        </MonolineGroup>
                    </ProfileAddonGroup>
                    <ProfileAddonGroup>
                        <ProfileAddonGroupTitle>Programming Languages</ProfileAddonGroupTitle>
                        <MonolineGroup>
                            <Monoline comment="primary">Python</Monoline>
                            <Monoline comment="installed">C#</Monoline>
                            <Monoline comment="partially installed">HTML, CSS, JS</Monoline>
                            <Monoline comment="installing">Rust</Monoline>
                            <Monoline comment="installing">Zig</Monoline>
                            <Monoline comment="uninstalling (?)">VB, VB.NET</Monoline>
                        </MonolineGroup>
                    </ProfileAddonGroup>
                    <ProfileAddonGroup>
                        <ProfileAddonGroupTitle>Operating Systems</ProfileAddonGroupTitle>
                        <MonolineGroup>
                            <Monoline comment="pc">openSUSE Tumbleweed</Monoline>
                            <Monoline comment="mobile">HyperOS</Monoline>
                            <Monoline comment="server, primary">Alpine Linux</Monoline>
                            <Monoline comment="server">Debian 12 (bookworm)</Monoline>
                        </MonolineGroup>
                    </ProfileAddonGroup>
                </ProfileAddons>
            </Header>

            <AccountShowcase.Container>
                <AccountShowcase.Category title="oss">
                    <AccountShowcase.Account
                        href="https://github.com/ricky8955555/"
                        icon={<FaGithub />}
                        iconBackground="#000000"
                        platform="GitHub"
                    >
                        ricky8955555
                    </AccountShowcase.Account>
                </AccountShowcase.Category>

                <AccountShowcase.Category title="social-networks">
                    <AccountShowcase.Account
                        href="https://telegram.me/ricky8955555"
                        icon={<FaTelegramPlane />}
                        iconBackground="#0088CC"
                        platform="Telegram"
                    >
                        @ricky8955555
                    </AccountShowcase.Account>
                </AccountShowcase.Category>

                <AccountShowcase.Category title="e-mails">
                    <AccountShowcase.Account
                        href="mailto:rkmiao@duck.com"
                        icon={<FaEnvelope />}
                        iconBackground="#46578B"
                        platform="Email"
                    >
                        rkmiao@duck.com
                    </AccountShowcase.Account>
                </AccountShowcase.Category>

                <AccountShowcase.Category title="wikis">
                    <AccountShowcase.Account
                        href="https://zh.wikipedia.org/wiki/User:Ricky8955555"
                        icon={<FaWikipediaW />}
                        iconBackground="#000000"
                        platform="Wikipedia"
                    >
                        Ricky8955555
                    </AccountShowcase.Account>

                    <AccountShowcase.Account
                        href="https://zh.moegirl.org.cn/User:Rkmiao"
                        icon={<FaCreativeCommons />}
                        iconBackground="#000000"
                        platform="Moegirl"
                    >
                        Rkmiao
                    </AccountShowcase.Account>
                </AccountShowcase.Category>
            </AccountShowcase.Container>

            <Row>
                <Description>
                    <Paragraph>
                        Hi, here is <del>a humanoid tool</del> {'(aka. "工具人" in Chinese)'}.
                    </Paragraph>
                    <Paragraph>
                        {"I'm"} a shotacon and lolicon who is fond of shota and loli in anime. And I enjoy listening
                        songs sung by virtual singers (e.g. VOCALOID, UTAU, SynthV).
                    </Paragraph>
                </Description>
                <Description>
                    <Paragraph>A garbage knowing nothing.</Paragraph>
                    <Paragraph>Seldom play game. More likely play the easy and casual games.</Paragraph>
                </Description>
            </Row>

            <Footer>
                <FooterParagraph icon={IoGitBranch}>
                    Fork this template on GitHub:&nbsp;
                    <a className="link" href="https://github.com/amphineko/reactiveneko">
                        amphineko/reactiveneko
                    </a>
                    <span className="external-link-icon">
                        <FaExternalLinkAlt />
                    </span>
                </FooterParagraph>
                <FooterParagraph icon={IoBulb}>
                    Copyright © 2023-{new Date().getFullYear()} ricky8955555. Illustrations have their own licenses.
                </FooterParagraph>
                <FooterParagraph icon={IoImage}>
                    Background illustrated by&nbsp;
                    <a href="https://www.pixiv.net/artworks/82517404" className="link">
                        海ばたり
                    </a>
                    <span className="external-link-icon">
                        <FaExternalLinkAlt />
                    </span>
                    .
                </FooterParagraph>
                <FooterParagraph icon={IoImage}>
                    Profile illustrated by&nbsp;
                    <a href="https://www.pixiv.net/artworks/97558489" className="link">
                        8765
                    </a>
                    <span className="external-link-icon">
                        <FaExternalLinkAlt />
                    </span>
                    .
                </FooterParagraph>
            </Footer>

            <style jsx>{`
                .container {
                    display: flex;
                    flex-direction: column;
                    gap: 2rem;
                    max-width: 64em;
                    margin: 0 auto;
                }

                .link {
                    color: inherit;
                    text-decoration: none;
                }

                .external-link-icon {
                    font-size: 0.75em;
                    margin-left: 0.5em;
                    vertical-align: 0.25em;
                }

                .silent-link {
                    color: inherit;
                    text-decoration: none;
                }
            `}</style>

            <style jsx global>{`
                body {
                    background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5)), url('${Background.src}') no-repeat;
                    background-size: cover;
                    background-
                    font-family: 'Helvetica Neue', Helvetica, Arial, 'PingFangTC-Light', 'Microsoft YaHei', '微软雅黑',
                        'STHeiti Light', STXihei, '华文细黑', Heiti, '黑体', 'sans-serif';
                    margin: 0;
                    min-height: 100vh;
                    padding: 1em 0;
                }
            `}</style>
        </div>
    )
}

export default IndexPage

function getDeployTarget(): DeployTarget {
    const deployTarget = process.env.NEXT_PUBLIC_DEPLOY_TARGET ?? ''

    if (!DEPLOY_TARGETS.includes(deployTarget as unknown as DeployTarget)) {
        throw new Error(`Invalid deploy target: ${deployTarget}`)
    }

    return deployTarget as DeployTarget
}

export const getStaticProps: GetStaticProps<IndexPageProps> = () => {
    return {
        props: {
            deployTarget: getDeployTarget(),
        },
        revalidate: 60 * 60 * 24 * 7, // revalidates weekly
    }
}
