import React, {useEffect, useState} from "react";
import first_icon from "../../assets/first_icon.png";
import second_icon from "../../assets/second_icon.png";
import {PiArrowFatDownLight} from "react-icons/pi";
import axios from "axios";
import StateToggle from "../../components/StateToggle/StateToggle";

export default function Main() {

    const [data, setData] = useState([]);
    const [errorr, setError] = useState(null);

    useEffect(() => {
        const fetchDataInterval =setInterval(() => {
            fetchData();
        }, 3000);

        return () => {
           clearInterval(fetchDataInterval);
        };
    }, []);



    const fetchData = async () => {
        try {
            const response = await axios.get('https://mhpp-api.vercel.app/get_data');
            const dataArray = response?.data?.data; // Accessing the data property which holds the array
            // Now you can work with the dataArray as an array
            console.log(dataArray); // Output the array to the console
            setData(dataArray)
            // For example, you can iterate over the array
            // dataArray.forEach(item => {
            //     console.log(item.id, item.data); // Output each item's id and data
            //     // You can perform any other operations you need with each item here
            // });
        } catch (error) {
            setError(error);
            console.log(error);
        }
    };

    console.log(data);

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
                        {data[0]?.data} % FULL
                    </div>


                </div>
            </div>

            {/*third component*/}
            <div className={'w-4 h-[3px] bg-black absolute top-44 left-[233px]'}></div>

            {/*fourth component*/}
            <div className={'w-28 h-52 border-r-2 border-black absolute top-[131px] left-[248px]'}>
                <div className={'w-full h-12 border-y-2 border-l-2 border-black relative'}>
                    <span className={'absolute -top-10 right-5 text-2xl '}>5</span>
                    <div className={'absolute flex flex-col items-center -top-[44px] left-6 gap-1 '}>

                        <StateToggle state={data[1]?.data}/>
                        <img src={first_icon} className={'w-6 h-6 object-contain rotate-90 '} alt={`first icon`}/>
                    </div>
                    <div className={'absolute flex flex-col items-center -bottom-[38px] left-6 gap-1  '}>
                        <img src={first_icon} className={'w-6 h-6 object-contain rotate-90 '} alt={`first icon`}/>
                        <StateToggle state={data[2]?.data}/>
                    </div>
                    <div className={'absolute -bottom-[181px] -right-0.5 h-4 w-0.5 bg-black'}></div>
                    <div className={'absolute -bottom-[201px] -right-0.5 h-4 w-0.5 bg-black'}></div>
                </div>
            </div>

            {/*fifth component*/}
            <div className={'w-[542px] h-[300px] border-y-2 border-l-2 border-black absolute left-[358px] top-[378px]'}>
                <div className={'w-full h-full flex items-start'}>
                    <div className={'w-48 h-full border-r-2 border-black relative'}>

                        <div className={'absolute flex flex-row items-center -left-[59px] top-12 gap-1  '}>
                            <StateToggle state={data[6]?.data}/>
                            <img src={first_icon} className={'w-6 h-6 object-contain '} alt={`first icon`}/>
                            <span className={'ml-2'}>3</span>
                        </div>

                        <div className={'absolute flex flex-col items-center left-8 -top-[44px] gap-1 '}>
                            <StateToggle state={data[7]?.data}/>
                            <img src={first_icon} className={'w-6 h-6 object-contain rotate-90'} alt={`first icon`}/>
                            <span>4</span>
                        </div>


                        <div className={'flex flex-col items-center absolute w-20 h-auto top-1 -right-[41px] gap-1'}>
                            <div className={'flex items-center gap-3'}>
                                <div
                                    className={'whitespace-nowrap -translate-x-6 p-1 border-2 border-red-500 text-red-500 font-semibold text-xs ml-1 relative'}>
                                    {data[5]?.data} l/s
                                </div>
                                <span className={'  font-semibold relative'}>
                                    <div className={'flex flex-col items-center gap-0.5 absolute  left-0 -top-[45px] m-auto'}>
                                        <div className={'whitespace-nowrap  p-0.5  border-2 border-[#4ea1e3] text-[#4ea1e3] text-xs '}>
                                            p ={data[28]?.data} kpa
                                        </div>
                                    </div>
                                    <div className={'uppercase'}>WM2</div>
                                </span>
                            </div>

                            <div className={'flex items-center gap-3 -translate-y-5'}>
                                <div className={'w-0.5 h-3 bg-black'}></div>
                                <div className={'w-0.5 h-3 bg-black'}></div>
                            </div>
                        </div>
                        <div className={'absolute flex flex-row items-center -right-[31px] top-16   '}>
                            <StateToggle state={data[8]?.data}/>
                            <img src={first_icon} className={'w-6 h-6 object-contain '} alt={`first icon`}/>
                            <span className={'ml-2'}>1'</span>

                        </div>

                        <div className={'absolute flex flex-row items-end -right-[50px] top-24'}>
                            <span className={'-translate-x-6 relative'}>
                                Valve'
                                <div className={'absolute -bottom-7 -left-1 text-xs gap-0.5 flex  items-center'}>
                                    <div className={'whitespace-nowrap  p-0.5  border-2 border-[#4ea1e3] text-[#4ea1e3] text-xs '}>
                                            p ={data[15]?.data} kpa
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

                                <StateToggle state={data[19]?.data}/>

                                <div className={'absolute -bottom-5 text-xs flex flex-col items-center'}>
                                    <div className={'text-[#54af57]'}>{data[20]?.data} %</div>
                                </div>
                            </div>


                        </div>

                        <div className={'absolute flex flex-row items-center -right-[38px] top-48'}>

                            <div className={'p-1 border-2 border-black relative'}>
                                AG

                                <div className={'absolute -bottom-0 -left-[55px] text-xs gap-0.5 flex  items-center'}>
                                    <div className={'whitespace-nowrap  p-1 border-2 border-red-500 text-red-500 font-semibold text-[9px]  relative'}>
                                        {data[22]?.data} kw
                                    </div>
                                </div>

                                <div className={'absolute -bottom-7 -left-12 text-xs gap-0.5 flex  items-center'}>
                                    <div
                                        className={'whitespace-nowrap  p-0.5  border-2 border-[#4ea1e3] text-[#4ea1e3] text-xs '}>
                                    p ={data[13]?.data} kpa
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
                            <StateToggle state={data[9]?.data}/>
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
                                    {data[3 ]?.data} l/s
                                </div>
                            </div>
                        </div>

                        <div className={'flex  items-center absolute w-20 h-auto top-2 -right-[5px] '}>
                            <div className={'flex flex-col items-center'}>
                                <div
                                    className={'whitespace-nowrap -translate-x-2 p-1 border-2 border-red-500 text-red-500 font-semibold text-xs ml-1 relative'}>
                                    {data[4]?.data} l/s
                                </div>
                            </div>
                            <div className={'flex items-center gap-3'}>
                                <div className={'w-0.5 h-3 bg-black'}></div>
                                <div className={'w-0.5 h-3 bg-black'}></div>
                            </div>
                            <span className={'uppercase self-start translate-x-4  font-semibold'}>WM1</span>
                        </div>
                        <div className={'absolute flex flex-row items-center -right-[27px] top-12   '}>
                            <StateToggle state={data[10]?.data}/>
                            <img src={first_icon} className={'w-6 h-6 object-contain '} alt={`second icon`}/>
                            <span className={'ml-2'}>1</span>
                        </div>

                        <div className={'absolute flex flex-row items-start -right-[50px] top-24'}>
                            <span className={'-translate-x-5 relative'}>
                                Valve
                                <div className={'absolute -bottom-8 -left-1 text-xs gap-0.5 flex  items-center'}>
                                    <div
                                        className={'whitespace-nowrap  p-0.5  border-2 border-[#4ea1e3] text-[#4ea1e3] text-xs '}>
                                            p ={data[14]?.data} kpa
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
                                    <StateToggle state={data[17]?.data}/>

                                </div>

                                <div className={'flex  items-start translate-x-1 gap-0.5 '}>
                                    <div className={'text-[#54af57]'}>{data[18]?.data} %</div>
                                </div>

                            </div>


                        </div>

                        <div className={'absolute flex flex-row items-center -right-[38px] top-40'}>

                            <div className={'p-1 border-2 border-black relative'}>
                                AG
                                <div className={'absolute -bottom-0 -left-[55px] text-xs gap-0.5 flex  items-center'}>
                                    <div
                                        className={'whitespace-nowrap  p-1 border-2 border-red-500 text-red-500 font-semibold text-[9px]  relative'}>
                                        {data[21]?.data} kw
                                    </div>
                                </div>

                                <div className={'absolute -bottom-7 -left-12 text-xs gap-0.5 flex  items-center'}>
                                    <div
                                        className={'whitespace-nowrap  p-0.5  border-2 border-[#4ea1e3] text-[#4ea1e3] text-xs '}>
                                        p ={data[12]?.data} kpa
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
                            <StateToggle state={data[11]?.data}/>

                            <img src={first_icon} className={'w-6 h-6 object-contain '} alt={`first icon`}/>
                            <span className={'ml-2'}>2</span>
                        </div>

                        <div className={'absolute -bottom-[29px] left-9 gap-2 flex flex-col items-center'}>
                            <div
                                className={'whitespace-nowrap  p-0.5  border-2 border-[#4ea1e3] text-[#4ea1e3] text-xs '}>
                                p ={data[16]?.data} kpa
                            </div>
                        </div>
                    </div>

                    <div className={'w-48 h-20   relative self-end'}>

                        <div className={'w-80 h-full absolute border-t-2 border-r-2 border-black'}>
                        <div className={'w-full h-full relative'}>

                                <div className={'absolute flex flex-col items-center right-[80px] -top-9'}>

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
                                                <StateToggle state={data[23]?.data}/>
                                            </div>

                                            <div className={'flex  items-start translate-x-1 gap-0.5 '}>
                                                <div className={'text-[#54af57]'}>{data[24]?.data} %</div>
                                            </div>

                                        </div>
                                    </div>

                                </div>

                            <div className={'absolute flex flex-col items-center left-2.5 -bottom-[34px]   '}>
                                <div className={'flex items-center '}>
                                    <img src={first_icon} className={'w-6 h-6 object-contain rotate-90'}
                                         alt={`first icon`}/>
                                    <span className={'ml-4 -translate-y-4'}>7</span>
                                </div>
                                <div className={'flex items-center '}>
                                    <StateToggle state={data[25]?.data}/>

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
                    Water pH: {data[27]?.data}
                </div>
                <div className={'text-2xl font-semibold text-[#4ea1e3] flex items-center gap-1'}>
                    Water temperature: {data[26]?.data} °C
                </div>
            </div>

            <div className={'w-8 h-40 border-l-2 border-t-2 border-black absolute left-[900px] top-[140px] '}>
                <div className={'w-full h-full relative'}>

                <div className={'absolute flex flex-row items-center -left-[62px] top-20   '}>
                        <StateToggle state={data[29]?.data}/>
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