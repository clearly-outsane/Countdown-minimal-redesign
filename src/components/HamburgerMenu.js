import React, { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { TweenMax } from 'gsap'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import './menu.scss'
import { staggerRevealClose } from '../utils/Animations'

const HamburgerMenu = ({
    show,
    setMenu,
    initial,
    canScroll,
    scrollFunction,
}) => {
    let menu = useRef(null)
    const reveal1 = useRef()
    const reveal2 = useRef()

    const scrollTo = (y) => {
        !!canScroll && scrollFunction(y)
    }

    const closeMenu = () => {
        staggerRevealClose(reveal2.current, reveal1.current)

        gsap.to(menu, { duration: 1, css: { display: 'none' } })

        setMenu(false)
    }

    useEffect(() => {
        document.body.style.overflow = 'auto'
        if (!show && !initial) {
            closeMenu()
        }

        if (show) {
            menu.style.display = 'block'

            document.body.style.overflow = 'hidden'
            gsap.to([reveal1.current, reveal2.current], {
                duration: 0,
                height: '100vh',
                opacity: 1,
            })
            gsap.from([reveal1.current, reveal2.current], {
                duration: 0.8,
                height: 0,
                transformOrigin: 'right top',
                skewY: 2,
                ease: 'power3.inOut',
                stagger: {
                    amount: 0.1,
                },
            })
        }
        return () => {}
    }, [show])
    const fontStyles = {
        fontFamily: 'Anton',

        textTransform: 'uppercase',
        paddingTop: 24,
    }
    return (
        <header style={{ height: 0 }}>
            <div ref={(el) => (menu = el)} className='hamburger-menu'>
                <div
                    ref={reveal1}
                    className='menu-secondary-background-color'
                />
                <div ref={reveal2} className='menu-layer'>
                    <div className='menu-city-background'></div>

                    <div className='wrapper' style={{ height: '100%' }}>
                        <div className='menu-links' style={{ height: '100%' }}>
                            <Grid
                                container
                                justify='center'
                                alignItems='center'
                                style={{
                                    height: '100%',
                                    width: '50%',
                                }}
                            >
                                <nav style={{ height: '50%' }}>
                                    <Typography
                                        variant='h2'
                                        component='span'
                                        style={{
                                            ...fontStyles,
                                        }}
                                        onClick={() => {
                                            closeMenu()
                                            setTimeout(() => {
                                                scrollTo(
                                                    window.innerHeight * 1.7 +
                                                        96
                                                ) //put in the value you wanna scroll to
                                            }, 750)
                                        }}
                                    >
                                        About <br />
                                    </Typography>
                                    <Typography
                                        variant='h2'
                                        component='span'
                                        style={{
                                            ...fontStyles,
                                        }}
                                        onClick={() => {
                                            closeMenu()
                                            setTimeout(() => {
                                                scrollTo(
                                                  window.innerHeight * 1.7 + (document.querySelector(".about").offsetHeight) +
                                                  96
                                                ) //put in the value you wanna scroll to
                                            }, 750)
                                        }}
                                    >
                                        Speakers <br />
                                    </Typography>
                                    <Typography
                                        variant='h2'
                                        component='span'
                                        style={{
                                            ...fontStyles,
                                        }}   onClick={() => {
                                        closeMenu()
                                        setTimeout(() => {
                                            scrollTo(
                                              window.innerHeight * 1.7 + (document.querySelector(".about").offsetHeight) + (document.querySelector(".speakers").offsetHeight) +
                                              96
                                            ) //put in the value you wanna scroll to
                                        }, 750)
                                    }}
                                    >
                                        Performances <br />
                                    </Typography>
                                    <Typography
                                        variant='h2'
                                        component='span'
                                        style={{
                                            ...fontStyles,
                                        }}
                                        onClick={() => {
                                            closeMenu()
                                            setTimeout(() => {
                                                scrollTo(
                                                  window.innerHeight * 1.7 + (document.querySelector(".about").offsetHeight) + (document.querySelector(".performanceSlide").offsetHeight) + (document.querySelector(".form").offsetHeight)  + (document.querySelector(".performers").offsetHeight)  + (document.querySelector(".speakers").offsetHeight) + (document.querySelector(".performers").offsetHeight) +(document.querySelector(".performances").offsetHeight)
                                                +  96
                                                ) //put in the value you wanna scroll to
                                            }, 750)
                                        }}
                                    >
                                        Contact Us
                                        <br />
                                    </Typography>
                                </nav>
                            </Grid>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default HamburgerMenu
