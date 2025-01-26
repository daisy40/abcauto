function SpecialOffer ( {header = "Заголовок", fileName, imgAlt = "Изображение"} ) {
    const imgSrc = `/img/specialoffers/${fileName}.png`;

    return (
    <div className="relative w-[447px] h-[196px] rounded-[25px] bg-gray-400 overflow-hidden">
        <div className="absolute w-[263px] h-[350.67px] left-[8px] bg-gray-400 blur-[40px] top-1/2 transform -translate-y-1/2 z-20" />
        <img className="absolute right-0" src={imgSrc} alt={imgAlt} />
        <div className="z-21 relative flex flex-col justify-between h-full pt-[29px] pb-[25px] pl-[21px]">
            <div className="flex flex-col gap-[4px]">
                <span className="font-bold text-xl leading-[23.44px]">{header}</span>
                <span className="text-gray leading-[16.41px]">1,9% по льготной ставке</span>
            </div>
            <a href="#" className="">
                <button className="w-[142px] h-[40px] bg-gray-200 text-black">Узнать больше</button>
            </a>
        </div>
    </div>
    )
}

export default SpecialOffer;