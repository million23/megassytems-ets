import { AnimatePresence, motion } from 'framer-motion'
import { Trans_Page, Trans_Tab } from "../../components/_Animations"
import Head from "next/head"
import { MdArrowBack, MdArrowDownward, MdArrowDropDown, MdInfo, MdOutlineCheckCircle, MdRssFeed, MdShoppingBasket } from "react-icons/md"
import Link from "next/link"
import { useState } from "react"
import Tab_GeneralInfo from "../../components/Races/Tab_GenInfo"
import Tab_BasketingList from "../../components/Races/Tab_BasketingList"

const Slug_Race = e => {

    // tabs
    const [ActiveTab, SetTab] = useState(1)

    return (
        <>
            <Head>
                <title>Race Detail | MegaSystems-ETS</title>
            </Head>
            <motion.section
                variants={Trans_Page}
                initial="initial" animate="animate" exit='exit'
                className="min-h-screen my-28 lg:my-36">
                <div className="flex items-center">
                    <Link href='/races'>
                        <button className="btn btn-ghost btn-square mr-3 btn-sm">
                            <MdArrowBack size={25} />
                        </button>
                    </Link>
                    <p className="text-3xl">Race Detail</p>
                </div>

                {/* tabs mobile */}
                <div className="lg:hidden mt-5 grid grid-cols-4 gap-2 w-full">
                    <button
                        onClick={e => { SetTab(1) }}
                        className={`btn-block btn ${ActiveTab == 1 ? "btn-primary" : "btn-ghost"}`}>
                        <MdInfo size={25} />
                    </button>
                    <button
                        onClick={e => { SetTab(2) }}
                        className={`btn-block btn ${ActiveTab == 2 ? "btn-primary" : "btn-ghost"}`}>
                        <MdShoppingBasket size={25} />
                    </button>
                    <button
                        onClick={e => { SetTab(3) }}
                        className={`btn-block btn ${ActiveTab == 3 ? "btn-primary" : "btn-ghost"}`}>
                        <MdRssFeed size={25} />
                    </button>
                    <button
                        onClick={e => { SetTab(4) }}
                        className={`btn-block btn ${ActiveTab == 4 ? "btn-primary" : "btn-ghost"}`}>
                        <MdOutlineCheckCircle size={25} />
                    </button>
                </div>

                {/* tabs desktop */}
                <div className="hidden lg:block tabs tabs-boxed mt-5 bg-transparent gap-2">
                    <a
                        onClick={e => { SetTab(1) }}
                        className={ActiveTab == 1 ? "tab tab-active" : "tab"}>
                        <MdInfo size={25} className="mr-2" />
                        General Information

                    </a>
                    <a
                        onClick={e => { SetTab(2) }}
                        className={ActiveTab == 2 ? "tab tab-active" : "tab"}>
                        <MdShoppingBasket size={25} className="mr-2" />
                        Basketing List
                    </a>
                    <a
                        onClick={e => { SetTab(3) }}
                        className={ActiveTab == 3 ? "tab tab-active" : "tab"}>
                        <MdRssFeed size={25} className="mr-2" />
                        Live Data
                    </a>
                    <a
                        onClick={e => { SetTab(4) }}
                        className={ActiveTab == 4 ? "tab tab-active" : "tab"}>
                        <MdOutlineCheckCircle size={25} className="mr-2" />
                        Race Results
                    </a>
                </div>

                <div className="divider" />
                {/* race detail */}
                <AnimatePresence>
                    {ActiveTab === 1 && (
                        <motion.div
                            variants={Trans_Tab} layout
                            initial='initial' animate='animate'
                        >
                            <Tab_GeneralInfo />
                        </motion.div>
                    )}
                </AnimatePresence>

                <AnimatePresence>
                    {ActiveTab === 2 && (
                        <motion.div
                            variants={Trans_Tab} layout
                            initial='initial' animate='animate'
                        >
                            <Tab_BasketingList />
                        </motion.div>
                    )}
                </AnimatePresence>

                <AnimatePresence>
                    {ActiveTab === 3 && (
                        <motion.div
                            variants={Trans_Tab} layout
                            initial='initial' animate='animate'
                        >
                            <p className="text-3xl text-center lg:text-left">Live Data</p>
                        </motion.div>
                    )}
                </AnimatePresence>

                <AnimatePresence>
                    {ActiveTab === 4 && (
                        <motion.div
                            variants={Trans_Tab} layout
                            initial='initial' animate='animate'
                        >
                            <p className="text-3xl text-center lg:text-left">Race Results</p>
                        </motion.div>
                    )}
                </AnimatePresence>


            </motion.section>
        </>
    )
}

export default Slug_Race