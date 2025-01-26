function Partner ( {fileName, domain} ) {
    const imgSrc = `/img/partners/${fileName}.png`;
    const href = `https://www.${domain}.ru`;

    return (
        <a href={href} className="inline-block">
            <div className="w-[327px] h-[133px] bg-gray-400 rounded-[10px] flex justify-center items-center">
                <img src={imgSrc} alt={`Логотип партнера ${fileName}`} />
            </div>
        </a>
    )
}

export default Partner;