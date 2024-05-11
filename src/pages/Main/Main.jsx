import React, {useEffect, useState} from "react";
import first_icon from "../../assets/first_icon.png";
import second_icon from "../../assets/second_icon.png";
import {PiArrowFatDownLight} from "react-icons/pi";
import axios from "axios";
import StateToggle from "../../components/StateToggle/StateToggle";


export default function Main() {

    const [data, setData] = useState(null);
    const [errorr, setError] = useState(null);

    const baseURL = 'https://mhpp-api.vercel.app/get_data'

    // useEffect(() => {
    //     fetchData()
    // }, []);
    //
    //
    // const fetchData = async () => {
    //         const response = await axios.get('https://mhpp-api.vercel.app/get_data', {}).then((response) => {console.log(response)}).catch((e) => console.error(e));
    // };
    //
    //
    // console.log(data)

    axios.get('https://mhpp-api.vercel.app/get_data', {
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    }).then((response) => {console.log(response)}).catch((error) => {console.log(error)})

    return <>
        <div className={'w-[1180px] h-[780px] bg-white rounded-xl shadow-2xl flex flex-col items-start relative'}>

            {/*first component*/}
            <div
                className={'border-t-2 border-r-2 border-black rotate-[-90deg] relative text-start translate-y-60 font-semibold py-1 pr-3'}>
                <span>to water <br/> consumers</span>
            </div>

            {/*second component*/}
            <div
                className={'w-40 h-28 border-2 border-black absolute top-[120px] left-[74px] flex flex-col items-start'}>
                <div className={'w-full h-10 border-b-2 border-black'}></div>
                <div className={'w-full h-full text-2xl bg-[#85dbec] font-semibold pt-2 relative'}>
                    Buffer tank
                    <div
                        className={'whitespace-nowrap absolute -top-20 right-0 left-0 m-auto p-1 w-[100px] h-[40px] border-2 border-[#4ea1e3] text-[#4ea1e3] text-lg uppercase text-lg]   '}>
                        {data?.data[1]?.data} % FULL
                    </div>

                    <div
                        className={'whitespace-nowrap absolute -top-[120px] left-0 right-0 m-auto  w-[60px] h-[30px] bg-[#71f54a] text-lg text-[#dc5d3e]'}>bt_i
                    </div>
                </div>
            </div>

            {/*third component*/}
            <div className={'w-4 h-[3px] bg-black absolute top-44 left-[233px]'}></div>

            {/*fourth component*/}
            <div className={'w-28 h-52 border-r-2 border-black absolute top-[131px] left-[248px]'}>
                <div className={'w-full h-12 border-y-2 border-l-2 border-black relative'}>
                    <span className={'absolute -top-10 right-5 text-2xl '}>5</span>
                    <div className={'absolute flex flex-col items-center -top-[74px] left-4 gap-1 '}>
                        <div
                            className={'whitespace-nowrap   w-[50px] h-[25px] bg-[#71f54a] text-sm text-[#dc5d3e]'}>bt_v1
                        </div>
                        <StateToggle state={`close`}/>
                        <img src={first_icon} className={'w-6 h-6 object-contain rotate-90 '} alt={`first icon`}/>
                    </div>
                    <div className={'absolute flex flex-col items-center -bottom-[67px] left-4 gap-1  '}>
                        <img src={first_icon} className={'w-6 h-6 object-contain rotate-90 '} alt={`first icon`}/>
                        <div
                            className={'whitespace-nowrap   w-[50px] h-[25px] bg-[#71f54a] text-sm text-[#dc5d3e]'}>bt_v2
                        </div>
                        <StateToggle state={`close`}/>
                    </div>
                    <div className={'absolute -bottom-[181px] -right-0.5 h-4 w-0.5 bg-black'}></div>
                    <div className={'absolute -bottom-[201px] -right-0.5 h-4 w-0.5 bg-black'}></div>
                </div>
            </div>

            {/*fifth component*/}
            <div className={'w-[542px] h-[300px] border-y-2 border-l-2 border-black absolute left-[358px] top-[378px]'}>
                <div className={'w-full h-full flex items-start'}>
                    <div className={'w-48 h-full border-r-2 border-black relative'}>

                        <div className={'absolute flex flex-row items-center -left-[126px] top-12 gap-1  '}>
                            <div
                                className={'whitespace-nowrap   w-[60px] h-[30px] bg-[#71f54a] text-lg text-[#dc5d3e]'}>v_3
                            </div>
                            <StateToggle state={`close`}/>
                            <img src={first_icon} className={'w-6 h-6 object-contain '} alt={`first icon`}/>
                            <span className={'ml-2'}>3</span>
                        </div>

                        <div className={'absolute flex flex-col items-center left-8 -top-[78px] gap-1 '}>
                            <div
                                className={'whitespace-nowrap   w-[60px] h-[30px] bg-[#71f54a] text-lg text-[#dc5d3e]'}>v_4
                            </div>
                            <StateToggle state={`close`}/>
                            <img src={first_icon} className={'w-6 h-6 object-contain rotate-90'} alt={`first icon`}/>
                            <span>4</span>
                        </div>


                        <div className={'flex flex-col items-center absolute w-20 h-auto top-1 -right-[41px] gap-1'}>
                            <div className={'flex items-center gap-3'}>
                                <div
                                    className={'whitespace-nowrap -translate-x-2 p-1 border-2 border-red-500 text-red-500 font-semibold text-xs ml-1 relative'}>
                                    <div
                                        className={'bg-[#71f54a] p-1  text-[#dc5d3e] absolute left-0 right-0 m-auto -top-7'}>wm2
                                    </div>
                                    450 l/s
                                </div>
                                <span className={'   font-semibold relative'}>
                                    <div className={'flex flex-col items-center gap-0.5 absolute  left-0 -top-[45px] m-auto'}>
                                        <div className={'whitespace-nowrap  p-0.5  border-2 border-[#4ea1e3] text-[#4ea1e3] text-xs '}>
                                            p =xxx kpa
                                        </div>
                                        <div className={'bg-[#71f54a] p-1  text-[#dc5d3e] text-[10px] '}>p_g</div>
                                    </div>
                                    <div className={'uppercase'}>WM2</div>
                                </span>
                            </div>

                            <div className={'flex items-center gap-3'}>
                                <div className={'w-0.5 h-3 bg-black'}></div>
                                <div className={'w-0.5 h-3 bg-black'}></div>
                            </div>
                        </div>
                        <div className={'absolute flex flex-row items-center -right-[31px] top-16   '}>
                            <div
                                className={'whitespace-nowrap   w-[60px] h-[30px] bg-[#71f54a] text-lg text-[#dc5d3e] mr-0.5'}>v_b_t2
                            </div>
                            <StateToggle state={`close`}/>
                            <img src={first_icon} className={'w-6 h-6 object-contain '} alt={`first icon`}/>
                            <span className={'ml-2'}>1'</span>

                        </div>

                        <div className={'absolute flex flex-row items-end -right-[83px] top-24'}>
                            <span className={'-translate-x-6 relative'}>
                                Valve'
                                <div className={'absolute -bottom-7 -left-12 text-xs gap-0.5 flex  items-center'}>
                                    <div className={'p-0.5 bg-[#71f54a] text-[#dc5d3e]'}>p_b_t2</div>
                                    <div className={'whitespace-nowrap  p-0.5  border-2 border-[#4ea1e3] text-[#4ea1e3] text-xs '}>
                                            p =xxx kpa
                                    </div>
                                </div>
                            </span>
                            <div className={'relative'}>
                                <img src={second_icon} className={'w-6 h-6 object-contain '} alt={`second icon`}/>
                                <div
                                    className={'w-5 h-5 rounded-full border-2 border-black absolute -left-[18px] top-[2px]  font-semibold pl-[1px] text-xs'}>M
                                </div>
                            </div>

                            <div className={'flex flex-col items-start gap-0.5 relative'}>
                                <div
                                    className={'whitespace-nowrap   w-[70px] h-[30px] bg-[#71f54a] text-lg text-[#dc5d3e] mr-0.5'}>mv_b_t2
                                </div>
                                <StateToggle state={`close`}/>

                                <div className={'absolute -bottom-9 text-xs flex flex-col items-center'}>
                                    <div className={'text-[#54af57]'}>xxx %</div>
                                    <div className={'p-0.5 bg-[#71f54a] text-[#dc5d3e]'}>mvi_b_t2</div>
                                </div>
                            </div>


                        </div>

                        <div className={'absolute flex flex-row items-center -right-[38px] top-48'}>

                            <div className={'p-1 border-2 border-black relative'}>
                                AG

                                <div className={'absolute -bottom-0 -left-[70px] text-xs gap-0.5 flex  items-center'}>
                                    <div className={'p-0.5 bg-[#71f54a] text-[#dc5d3e]'}>t2</div>
                                    <div className={'whitespace-nowrap  p-1 border-2 border-red-500 text-red-500 font-semibold text-xs  relative'}>
                                        105 kw
                                    </div>
                                </div>

                                <div className={'absolute -bottom-7 -left-12 text-xs gap-0.5 flex  items-center'}>
                                    <div className={'p-0.5 bg-[#71f54a] text-[#dc5d3e]'}>p_p_t2</div>
                                    <div
                                        className={'whitespace-nowrap  p-0.5  border-2 border-[#4ea1e3] text-[#4ea1e3] text-xs '}>
                                    p =xxx kpa
                                    </div>
                                </div>
                            </div>
                            <div className={'w-4 h-0.5 bg-black'}></div>
                            <div
                                className={'w-8 h-8 border-2 border-black rounded-full flex items-center justify-center bg-white'}>
                                <PiArrowFatDownLight className={'text-[20px]'}/>
                            </div>
                            <span className={'ml-1'}>T2</span>

                        </div>

                        <div className={'absolute flex flex-row items-center -right-[31px] top-64   '}>
                            <div
                                className={'whitespace-nowrap   w-[60px] h-[20px] bg-[#71f54a] text-xs text-[#dc5d3e] mr-0.5'}>v_p_t2
                            </div>
                            <StateToggle state={`close`}/>
                            <img src={first_icon} className={'w-6 h-6 object-contain '} alt={`first icon`}/>
                            <span className={'ml-2'}>2'</span>
                        </div>

                    </div>


                    <div className={'w-56 h-full border-r-2 flex items-start border-black relative '}>



                        <div className={' absolute w-20 h-auto -top-8 -right-[155px] '}>
                            <div className={'relative  flex flex-col items-center '}>
                                <span className={'uppercase  font-semibold'}>WM</span>
                                <div className={'flex items-center gap-3 rotate-90'}>
                                    <div className={'w-0.5 h-3 bg-black'}></div>
                                    <div className={'w-0.5 h-3 bg-black'}></div>
                                </div>

                                <div
                                    className={'whitespace-nowrap translate-x-8 p-1 mt-2 border-2 border-red-500 text-red-500 font-semibold text-xs  relative'}>
                                    <div
                                        className={'bg-[#71f54a] p-1  text-[#dc5d3e] absolute -right-10 top-0 bottom-0 m-auto'}>wm0
                                    </div>
                                    450 l/s
                                </div>
                            </div>
                        </div>

                        <div className={'flex  items-center absolute w-20 h-auto top-2 -right-[20px] '}>
                            <div className={'flex flex-col items-center'}>
                                <div
                                    className={'whitespace-nowrap -translate-x-2 p-1 border-2 border-red-500 text-red-500 font-semibold text-xs ml-1 relative'}>
                                    <div
                                        className={'bg-[#71f54a] p-1  text-[#dc5d3e] absolute left-0 right-0 m-auto -top-7'}>wm1
                                    </div>
                                    450 l/s
                                </div>
                            </div>
                            <div className={'flex items-center gap-3'}>
                                <div className={'w-0.5 h-3 bg-black'}></div>
                                <div className={'w-0.5 h-3 bg-black'}></div>
                            </div>
                            <span className={'uppercase self-start translate-x-4  font-semibold'}>WM1</span>
                        </div>
                        <div className={'absolute flex flex-row items-center -right-[27px] top-12   '}>
                            <div
                                className={'whitespace-nowrap   w-[60px] h-[20px] bg-[#71f54a] text-xs text-[#dc5d3e] mr-0.5'}>v_b_t1
                            </div>
                            <StateToggle state={`close`}/>
                            <img src={first_icon} className={'w-6 h-6 object-contain '} alt={`second icon`}/>
                            <span className={'ml-2'}>1</span>
                        </div>

                        <div className={'absolute flex flex-row items-start -right-[116px] top-24'}>
                            <span className={'-translate-x-5 relative'}>
                                Valve
                                <div className={'absolute -bottom-8 -left-12 text-xs gap-0.5 flex  items-center'}>
                                    <div className={'p-0.5 bg-[#71f54a] text-[#dc5d3e]'}>p_b_t1</div>
                                    <div
                                        className={'whitespace-nowrap  p-0.5  border-2 border-[#4ea1e3] text-[#4ea1e3] text-xs '}>
                                            p =xxx kpa
                                    </div>
                                </div>
                            </span>

                            <div className={'relative'}>
                                <img src={second_icon} className={'w-6 h-6 object-contain '} alt={`second icon`}/>
                                <div
                                    className={'w-5 h-5 rounded-full border-2 border-black absolute -left-[18px] top-[2px]  font-semibold pl-[1px] text-xs'}>M
                                </div>
                            </div>

                            <div className={'flex flex-col items-start'}>

                                <div className={'flex  items-start gap-0.5 '}>
                                    <StateToggle state={`close`}/>
                                    <div
                                        className={'whitespace-nowrap   w-[60px] h-[20px] bg-[#71f54a] text-xs text-[#dc5d3e] mr-0.5'}>mv_b_t1
                                    </div>
                                </div>

                                <div className={'flex  items-start translate-x-1 gap-0.5 '}>
                                    <div className={'text-[#54af57]'}>xxx %</div>
                                    <div
                                        className={'whitespace-nowrap   w-[60px] h-[20px] bg-[#71f54a] text-xs text-[#dc5d3e] mr-0.5'}>mvi_b_t1
                                    </div>
                                </div>

                            </div>


                        </div>

                        <div className={'absolute flex flex-row items-center -right-[38px] top-40'}>

                            <div className={'p-1 border-2 border-black relative'}>
                                AG
                                <div className={'absolute -bottom-0 -left-[70px] text-xs gap-0.5 flex  items-center'}>
                                    <div className={'p-0.5 bg-[#71f54a] text-[#dc5d3e]'}>t1</div>
                                    <div
                                        className={'whitespace-nowrap  p-1 border-2 border-red-500 text-red-500 font-semibold text-xs  relative'}>
                                        105 kw
                                    </div>
                                </div>

                                <div className={'absolute -bottom-7 -left-12 text-xs gap-0.5 flex  items-center'}>
                                    <div className={'p-0.5 bg-[#71f54a] text-[#dc5d3e]'}>p_p_t1</div>
                                    <div
                                        className={'whitespace-nowrap  p-0.5  border-2 border-[#4ea1e3] text-[#4ea1e3] text-xs '}>
                                        p =xxx kpa
                                    </div>
                                </div>

                            </div>
                            <div className={'w-4 h-0.5 bg-black'}></div>
                            <div
                                className={'w-8 h-8 border-2 border-black rounded-full flex items-center justify-center bg-white'}>
                                <PiArrowFatDownLight className={'text-[20px]'}/>
                            </div>
                            <span className={'ml-1'}>T1</span>

                        </div>

                        <div className={'absolute flex flex-row items-center -right-[27px] top-60 '}>
                            <StateToggle state={`close`}/>
                            <div
                                className={'whitespace-nowrap ml-0.5  w-[60px] h-[20px] bg-[#71f54a] text-xs text-[#dc5d3e] mr-0.5'}>v_p_t1
                            </div>
                            <img src={first_icon} className={'w-6 h-6 object-contain '} alt={`first icon`}/>
                            <span className={'ml-2'}>2</span>
                        </div>

                        <div className={'absolute -bottom-[29px] left-9 gap-2 flex flex-col items-center'}>
                            <div
                                className={'whitespace-nowrap  p-0.5  border-2 border-[#4ea1e3] text-[#4ea1e3] text-xs '}>
                                p =xxx kpa
                            </div>
                            <div className={'p-0.5 bg-[#71f54a] text-[#dc5d3e] text-sm'}>p_or</div>
                        </div>
                    </div>

                    <div className={'w-48 h-20   relative self-end'}>

                        <div className={'w-80 h-full absolute border-t-2 border-r-2 border-black'}>
                        <div className={'w-full h-full relative'}>

                                <div className={'absolute flex flex-col items-center right-[50px] -top-9'}>

                                    <div className={'relative'}>
                                        <div
                                            className={'w-5 h-5 rounded-full border-2 border-black translate-x-0.5 translate-y-0.5 font-semibold pl-[1px] text-xs relative'}>
                                            M
                                            <span className={'absolute -right-16 -top-1.5 text-lg'}>Valve''</span>
                                        </div>
                                        <img src={second_icon} className={'w-6 h-6 object-contain rotate-90 '}
                                             alt={`second icon`}/>
                                    </div>

                                    <div className={'flex flex-col items-center '}>
                                        <div className={'flex flex-col items-start'}>

                                            <div className={'flex  items-start gap-0.5 '}>
                                                <StateToggle state={`close`}/>
                                                <div
                                                    className={'whitespace-nowrap   w-[60px] h-[20px] bg-[#71f54a] text-xs text-[#dc5d3e] mr-0.5'}>mv_r
                                                </div>
                                            </div>

                                            <div className={'flex  items-start translate-x-1 gap-0.5 '}>
                                                <div className={'text-[#54af57]'}>xxx %</div>
                                                <div
                                                    className={'whitespace-nowrap   w-[60px] h-[20px] bg-[#71f54a] text-xs text-[#dc5d3e] mr-0.5'}>mvi_r
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                </div>

                            <div className={'absolute flex flex-col items-start left-5 -bottom-[34px]   '}>
                                <div className={'flex items-center self-end'}>
                                    <img src={first_icon} className={'w-6 h-6 object-contain rotate-90'}
                                         alt={`first icon`}/>
                                    <span className={'ml-4 -translate-y-4'}>7</span>
                                </div>
                                <div className={'flex items-center '}>
                                    <div
                                        className={'whitespace-nowrap ml-0.5  w-[50px] h-[20px] bg-[#71f54a] text-xs text-[#dc5d3e] mr-0.5'}>v_7
                                    </div>
                                    <StateToggle state={`close`}/>

                                </div>


                            </div>

                            <div
                                className={'absolute -right-10 -bottom-20 border-x-2 border-b-2 border-black w-60 h-16 '}>

                                    <div className={'relative w-full h-full flex flex-col items-center'}>

                                        <div className={'w-full h-1/2 text-xl font-semibold'}>
                                            to river
                                        </div>
                                        <div className={'w-full h-1/2 bg-[#85dbec] '}></div>

                                    </div>

                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/*sixth component*/}

            <div
                className={'w-44 h-28 bg-[#85dbec] text-center flex justify-center items-center border-2 border-black absolute top-[110px] left-[930px]'}>
                <span className={'font-semibold text-2xl'}>DAM</span>
            </div>

            <div className={'absolute left-[460px] top-60 flex flex-col items-center'}>
                <div className={'text-2xl font-semibold text-[#4ea1e3] flex items-center gap-1'}>
                    Water pH: xx.xx
                    <div
                        className={'whitespace-nowrap ml-0.5  w-[50px] h-[20px] bg-[#71f54a] text-xs text-[#dc5d3e] mr-0.5'}>w_ph_g
                    </div>
                </div>
                <div className={'text-2xl font-semibold text-[#4ea1e3] flex items-center gap-1'}>
                    Water temperature: xxx.x °C
                    <div
                        className={'whitespace-nowrap ml-0.5  w-[50px] h-[20px] bg-[#71f54a] text-xs text-[#dc5d3e] mr-0.5'}>w_t_g
                    </div>
                </div>
            </div>

            <div className={'w-8 h-40 border-l-2 border-t-2 border-black absolute left-[900px] top-[140px] '}>
                <div className={'w-full h-full relative'}>

                <div className={'absolute flex flex-row items-center -left-[130px] top-20   '}>
                        <div
                            className={'whitespace-nowrap ml-0.5  w-[60px] h-[20px] bg-[#71f54a] text-xs text-[#dc5d3e] mr-0.5'}>v_dam
                        </div>
                        <StateToggle state={`close`}/>
                        <img src={first_icon} className={'w-6 h-6 object-contain ml-2 '} alt={`first icon`}/>
                        <span className={'ml-2'}>0</span>
                    </div>

                </div>
            </div>
            <div
                className={'w-[1px] h-8 border-[1px] border-black border-dashed absolute left-[900px] top-[308px] '}></div>
            <div className={'w-0.5 h-8 bg-black absolute left-[900px] top-[348px] '}></div>


        </div>
    </>
}