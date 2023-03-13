import React from 'react';
import './Skills.css';

const Skills = () => {
    return (
        <div>
            <div className="skills skills__section" id="skills">
                <h2 className="section__title">Skills</h2>

                <div className="skills__container container grid">

                    {/* =========================== Languages =========================== */}
                    <div className="skills__content">
                        <div className="skills__title">Languages</div>

                        <div className="skills__box">
                            <div className="skills__group">
                                <div className="skills__data">
                                    <i className="bx bx-badge-check"></i>

                                    <div>
                                        <h3 className="skills__name">Java</h3>
                                        {/* <span className="skills__level">Intermediate</span> */}
                                    </div>
                                </div>

                                <div className="skills__data">
                                    <i className="bx bx-badge-check"></i>

                                    <div>
                                        <h3 className="skills__name">C++</h3>
                                        {/* <span className="skills__level">Basic</span> */}
                                    </div>
                                </div>

                                <div className="skills__data">
                                    <i className="bx bx-badge-check"></i>

                                    <div>
                                        <h3 className="skills__name">C</h3>
                                        {/* <span className="skills__level">InteBasicrmediate</span> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* =========================== Web Technologies =========================== */}
                    <div className="skills__content">
                        <div className="skills__title">Web Technologies</div>

                        <div className="skills__box">
                            <div className="skills__group">
                                <div className="skills__data">
                                    <i className="bx bx-badge-check"></i>

                                    <div>
                                        <h3 className="skills__name">HTML</h3>
                                        {/* <span className="skills__level">Intermediate</span> */}
                                    </div>
                                </div>

                                <div className="skills__data">
                                    <i className="bx bx-badge-check"></i>

                                    <div>
                                        <h3 className="skills__name">CSS</h3>
                                        {/* <span className="skills__level">Intermediate</span> */}
                                    </div>
                                </div>

                                <div className="skills__data">
                                    <i className="bx bx-badge-check"></i>

                                    <div>
                                        <h3 className="skills__name">JavaScript</h3>
                                        {/* <span className="skills__level">Basic</span> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* =========================== Web Frameworks =========================== */}
                    <div className="skills__content">
                        <div className="skills__title">Web Frameworks</div>

                        <div className="skills__box">
                            <div className="skills__group">
                                <div className="skills__data">
                                    <i className="bx bx-badge-check"></i>

                                    <div>
                                        <h3 className="skills__name">Spring Boot</h3>
                                        {/* <span className="skills__level">Intermediate</span> */}
                                    </div>
                                </div>

                                <div className="skills__data">
                                    <i className="bx bx-badge-check"></i>

                                    <div>
                                        <h3 className="skills__name">React.js</h3>
                                        {/* <span className="skills__level">Intermediate</span> */}
                                    </div>
                                </div>

                                <div className="skills__data">
                                    <i className="bx bx-badge-check"></i>

                                    <div>
                                        <h3 className="skills__name">Bootstrap</h3>
                                        {/* <span className="skills__level">Basic</span> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* =========================== Tools =========================== */}
                    <div className="skills__content">
                        <div className="skills__title">Tools</div>

                        <div className="skills__box">
                            <div className="skills__group">
                                <div className="skills__data">
                                    <i className="bx bx-badge-check"></i>

                                    <div>
                                        <h3 className="skills__name">Intellij Idea</h3>
                                    </div>
                                </div>

                                <div className="skills__data">
                                    <i className="bx bx-badge-check"></i>

                                    <div>
                                        <h3 className="skills__name">VS Code</h3>
                                    </div>
                                </div>

                                <div className="skills__data">
                                    <i className="bx bx-badge-check"></i>

                                    <div>
                                        <h3 className="skills__name">MySQL</h3>
                                    </div>
                                </div>

                                <div className="skills__data">
                                    <div className="skills__data-sub">
                                        <div className="skills__sub">
                                            <i className="bx bx-badge-check"></i>

                                            <div>
                                                <h3 className="skills__name">Git</h3>
                                            </div>
                                        </div>

                                        <div className="skills__sub">
                                            <i className="bx bx-badge-check"></i>

                                            <div>
                                                <h3 className="skills__name">GitHub</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills
