import React, {useEffect,  useState} from "react";
import first_icon from "../../assets/first_icon.png";
import second_icon from "../../assets/second_icon.png";
import {PiArrowFatDownLight} from "react-icons/pi";
import axios from "axios";



export default function Main() {

    const [data, setData] = useState(null);
    const [errorr, setError] = useState(null);

    useEffect(() => {
        const fetchDataInterval = setInterval(() => {
            fetchData();
        }, 3000);

        return () => {
            clearInterval(fetchDataInterval);
        };
    }, []);



    const fetchData = async () => {
        try {
            const response = await axios.get('https://run.mocky.io/v3/7e086ba0-4bca-4076-84b6-38d7915572ba');
            setData(response.data);
        } catch (error) {
            setError(error);
            console.log(errorr)
        }
    };



    return<>
        <div className={'w-[1180px] h-[780px] bg-white rounded-xl shadow-2xl flex flex-col items-start relative'}>

            {/*first component*/}
            <div className={'border-t-2 border-r-2 border-black rotate-[-90deg] relative text-start translate-y-60 font-semibold py-1 pr-3'}>
                <span>to water <br/> consumers</span>
            </div>

            {/*second component*/}
            <div className={'w-40 h-28 border-2 border-black absolute top-[120px] left-[74px] flex flex-col items-start'}>
                <div className={'w-full h-10 border-b-2 border-black'}></div>
                <div className={'w-full h-full text-2xl bg-[#85dbec] font-semibold pt-2 relative'}>
                    Buffer tank
                    <div className={'absolute -bottom-12 right-0 left-0 m-auto p-1 w-[100px] h-[40px] border-2 border-red-500 text-red-500 text-lg uppercase   '}>
                        {data?.data[1]?.data} % FULL
                    </div>
                </div>
            </div>

            {/*third component*/}
            <div className={'w-4 h-[3px] bg-black absolute top-44 left-[233px]'}></div>

            {/*fourth component*/}
            <div className={'w-28 h-52 border-r-2 border-black absolute top-[131px] left-[248px]'}>
                <div className={'w-full h-12 border-y-2 border-l-2 border-black relative'}>
                    <span className={'absolute -top-10 right-5 text-2xl '}>5</span>
                    <div className={'absolute flex flex-row items-center -top-4 left-4  '}>
                        <img src={first_icon} className={'w-6 h-6 object-contain rotate-90 '} alt={`first icon`}/>
                    </div>
                    <div className={'absolute flex flex-row items-center -bottom-2.5 left-4  '}>
                        <img src={first_icon} className={'w-6 h-6 object-contain rotate-90 '} alt={`first icon`}/>
                    </div>
                    <div className={'absolute -bottom-[181px] -right-0.5 h-4 w-0.5 bg-black'}></div>
                    <div className={'absolute -bottom-[201px] -right-0.5 h-4 w-0.5 bg-black'}></div>
                </div>
            </div>

            {/*fifth component*/}
            <div className={'w-[542px] h-72 border-y-2 border-l-2 border-black absolute left-[358px] top-[378px]'}>
                <div className={'w-full h-full flex items-start'}>
                    <div className={'w-52 h-full border-r-2 border-black relative'}>

                        <div className={'absolute flex flex-row items-center -left-[16px] top-12  '}>
                            <img src={first_icon} className={'w-6 h-6 object-contain '} alt={`first icon`}/>
                            <span className={'ml-2'}>3</span>
                        </div>

                        <div className={'absolute flex flex-col items-center left-8 -top-[40px]  '}>
                            <span>4</span>
                            <img src={first_icon} className={'w-6 h-6 object-contain rotate-90'} alt={`first icon`}/>
                        </div>


                        <div className={'flex flex-col items-center absolute w-20 h-auto top-2 -right-[41px] '}>
                            <span className={'uppercase self-end translate-x-4  font-semibold'}>WM2</span>
                            <div className={'flex items-center gap-3'}>
                                <div className={'w-0.5 h-3 bg-black'}></div>
                                <div className={'w-0.5 h-3 bg-black'}></div>
                            </div>
                        </div>
                        <div className={'absolute flex flex-row items-center -right-[84px] top-12   '}>
                            <img src={first_icon} className={'w-6 h-6 object-contain '} alt={`first icon`}/>
                            <span className={'ml-2'}>1'</span>
                            <div className={'p-1 border-2 border-red-500 text-red-500 font-semibold text-xs ml-1'}>
                                {data?.data[4]?.data} l/s
                            </div>
                        </div>

                        <div className={'absolute flex flex-row items-start -right-[59px] top-24'}>

                            <div className={'relative'}>
                                <img src={second_icon} className={'w-6 h-6 object-contain '} alt={`second icon`}/>
                                <div className={'w-5 h-5 rounded-full border-2 border-black absolute -left-[18px] top-[2px]  font-semibold pl-[1px] text-xs'}>M</div>
                            </div>

                            <div className={'flex flex-col items-start '}>
                                <span className={'ml-2'}>Valve'</span>
                                <div className={'p-1 border-2 text-xs border-red-500 text-red-500 font-semibold ml-1'}>
                                    {data?.data[9]?.data}
                                </div>
                            </div>

                        </div>

                        <div className={'absolute flex flex-row items-center -right-[38px] top-40'}>

                            <div className={'p-1 border-2 border-black relative'}>
                                AG
                                <div className={'p-1 whitespace-nowrap border-2 text-xs border-red-500 text-red-500 font-semibold absolute right-0 -bottom-9'}>
                                    {data?.data[7]?.data} kW
                                </div>
                            </div>
                            <div className={'w-4 h-0.5 bg-black'}></div>
                            <div className={'w-8 h-8 border-2 border-black rounded-full flex items-center justify-center bg-white'}>
                                <PiArrowFatDownLight className={'text-[20px]'} />
                            </div>
                            <span className={'ml-1'}>T2</span>

                        </div>

                        <div className={'absolute flex flex-row items-center -right-[31px] top-56   '}>
                            <img src={first_icon} className={'w-6 h-6 object-contain '} alt={`first icon`}/>
                            <span className={'ml-2'}>2'</span>
                        </div>

                    </div>


                    <div className={'w-52 h-full border-r-2 flex items-start border-black relative '}>

                        <div className={'p-1 border-2 border-red-500 absolute left-20 -top-11 text-red-500 '}>
                            H={data?.data[5]?.data} mwc
                        </div>

                        <div className={' absolute w-20 h-auto -top-8 -right-[155px] '}>
                            <div className={'relative  flex flex-col items-end relative'}>

                                <div className={'p-1 border-2 border-red-500 text-red-500  absolute -top-10'}>
                                    {data?.data[2]?.data} l/s
                                </div>

                                <span className={'uppercase  font-semibold'}>WM</span>
                                <div className={'flex items-center gap-3 rotate-90'}>
                                    <div className={'w-0.5 h-3 bg-black'}></div>
                                    <div className={'w-0.5 h-3 bg-black'}></div>
                                </div>
                            </div>
                        </div>

                        <div className={'flex flex-col items-center absolute w-20 h-auto top-2 -right-[41px] '}>
                            <span className={'uppercase self-end translate-x-4  font-semibold'}>WM1</span>
                            <div className={'flex items-center gap-3'}>
                                <div className={'w-0.5 h-3 bg-black'}></div>
                                <div className={'w-0.5 h-3 bg-black'}></div>
                            </div>
                        </div>
                        <div className={'absolute flex flex-row items-center -right-[84px] top-12   '}>
                            <img src={first_icon} className={'w-6 h-6 object-contain '} alt={`second icon`}/>
                            <span className={'ml-2'}>1'</span>
                            <div className={'p-1 border-2 border-red-500 text-red-500 font-semibold text-xs ml-1'}>
                                {data?.data[3]?.data} l/s
                            </div>
                        </div>

                        <div className={'absolute flex flex-row items-start -right-[56px] top-24'}>

                            <div className={'relative'}>
                                <img src={second_icon} className={'w-6 h-6 object-contain '} alt={`second icon`}/>
                                <div className={'w-5 h-5 rounded-full border-2 border-black absolute -left-[18px] top-[2px]  font-semibold pl-[1px] text-xs'}>M</div>
                            </div>

                            <div className={'flex flex-col items-start '}>
                                <span className={'ml-2'}>Valve</span>
                                <div className={'p-1 border-2 text-xs border-red-500 text-red-500 font-semibold ml-1'}>
                                    {data?.data[8]?.data}
                                </div>
                            </div>

                        </div>

                        <div className={'absolute flex flex-row items-center -right-[38px] top-40'}>

                            <div className={'p-1 border-2 border-black relative'}>
                                AG
                                <div className={'p-1 whitespace-nowrap border-2 text-xs border-red-500 text-red-500 font-semibold absolute right-0 -bottom-9'}>
                                    {data?.data[6]?.data} kW
                                </div>
                            </div>
                            <div className={'w-4 h-0.5 bg-black'}></div>
                            <div className={'w-8 h-8 border-2 border-black rounded-full flex items-center justify-center bg-white'}>
                                <PiArrowFatDownLight className={'text-[20px]'} />
                            </div>
                            <span className={'ml-1'}>T1</span>

                        </div>

                        <div className={'absolute flex flex-row items-center -right-[27px] top-56   '}>
                            <img src={first_icon} className={'w-6 h-6 object-contain '} alt={`first icon`}/>
                            <span className={'ml-2'}>2</span>
                        </div>
                    </div>

                    <div className={'w-52 h-20   relative self-end'}>

                        <div className={'w-80 h-full absolute border-t-2 border-r-2 border-black'}>
                            <div className={'w-full h-full relative'}>

                                <div className={'absolute flex flex-col items-center right-[50px] -top-9'}>

                                    <div className={'relative'}>
                                        <div className={'w-5 h-5 rounded-full border-2 border-black translate-x-0.5 translate-y-0.5 font-semibold pl-[1px] text-xs relative'}>
                                            M
                                            <span className={'absolute -right-16 -top-1.5 text-lg'}>Valve''</span>
                                        </div>
                                        <img src={second_icon} className={'w-6 h-6 object-contain rotate-90 '} alt={`second icon`}/>
                                    </div>

                                    <div className={'flex flex-col items-center '}>
                                        <div className={'p-1 border-2 text-xs border-red-500 text-red-500 font-semibold ml-1'}>
                                            {data?.data[10]?.data}
                                        </div>
                                    </div>

                                </div>

                                <div className={'absolute flex flex-row items-center left-10 -bottom-[10px]   '}>
                                    <img src={first_icon} className={'w-6 h-6 object-contain rotate-90'} alt={`first icon`}/>
                                    <span className={'ml-4 -translate-y-4'}>7</span>
                                </div>

                                <div className={'absolute -right-10 -bottom-20 border-x-2 border-b-2 border-black w-60 h-16 '}>

                                    <div className={'relative w-full h-full flex flex-col items-center'}>

                                        <div className={'w-full h-1/2 text-xl font-semibold'}>
                                            Ditch to River
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

            <div className={'w-44 h-28 bg-[#85dbec] text-center flex justify-center items-center border-2 border-black absolute top-[110px] left-[930px]'}>
                <span className={'font-semibold text-2xl'}>DAM</span>
            </div>

            <div className={'w-8 h-40 border-l-2 border-t-2 border-black absolute left-[900px] top-[140px] '}>
                <div className={'w-full h-full relative'}>

                    <div className={'absolute flex flex-row items-center -left-[16px] bottom-3   '}>
                        <img src={first_icon} className={'w-6 h-6 object-contain '} alt={`first icon`}/>
                        <span className={'ml-2'}>0</span>
                    </div>

                </div>
            </div>
            <div className={'w-[1px] h-8 border-[1px] border-black border-dashed absolute left-[900px] top-[308px] '}></div>
            <div className={'w-0.5 h-8 bg-black absolute left-[900px] top-[348px] '}> </div>


        </div>
    </>
}