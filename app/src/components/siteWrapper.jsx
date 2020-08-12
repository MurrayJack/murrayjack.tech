import React from "react"
import { SiteHeader } from "./siteHeader"
import { useState } from "react"

export default ({ children }) => {
    const [visible, setVisibility] = useState(false)
    const [theme, setTheme] = useState("dark")

    const handleRadioClick = e => {
        setTheme(e.target.value)
    }

    return (
        <>
            <div id="mover" data-visible={visible} data-theme={theme}>
                <div id="wrapper">
                    <SiteHeader
                        isOpen={visible}
                        onClick={() => setVisibility(!visible)}
                    />

                    {children}
                </div>

                <aside>
                    <h3>Themes</h3>

                    <fieldset>
                        <legend>Theme</legend>
                        <div>
                            <div>
                                <input
                                    id="light"
                                    onClick={handleRadioClick}
                                    type="radio"
                                    name="theme"
                                    value="light"
                                ></input>
                                <label htmlFor="light">Light</label>
                            </div>
                            <div>
                                <input
                                    id="dark"
                                    onClick={handleRadioClick}
                                    type="radio"
                                    name="theme"
                                    value="dark"
                                ></input>
                                <label htmlFor="dark">Dark</label>
                            </div>
                            <div>
                                <input
                                    id="orange"
                                    onClick={handleRadioClick}
                                    type="radio"
                                    name="theme"
                                    value="orange"
                                ></input>
                                <label htmlFor="orange">Orange</label>
                            </div>
                        </div>
                    </fieldset>
                </aside>
            </div>

            <style jsx>{`
                #wrapper {
                    height: 100vh;
                    overflow: auto;
                    transition: all 0.5s ease 0s;
                }

                #mover {
                    transform: translate3d(0px, 0px, 0px);
                    transition: all 0.5s ease 0s;
                }

                #mover[data-visible="true"] {
                    transform: translate3d(-300px, 0px, 0px);
                }

                aside {
                    position: absolute;
                    right: -300px;
                    z-index: 1000;
                    width: 300px;
                    height: 100vh;
                    top: 0;
                    bottom: 0;
                    background: var(--main-color2);
                    padding: 1em;
                    box-sizing: border-box;
                }

                fieldset {
                    padding: 16px;
                    border: 0;
                    padding-left: 0;
                }

                legend {
                    opacity: 0;
                }

                fieldset > div {
                    display: grid;
                    grid-gap: 16px;
                }

                fieldset > div > div {
                    display: grid;
                    grid-gap: 8px;
                    grid-auto-flow: column;
                    grid-auto-columns: max-content;
                    align-items: center;
                    color: var(--main-color-inv);
                }
            `}</style>
        </>
    )
}