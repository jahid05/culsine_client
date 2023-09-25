const SectionTitle = ({title, span_title}) => {
    return (
        <div className="text-center md:py-20 py-14">
            <h1 className="md:text-6xl text-3xl font-bold text-theme-color-200">{title} <span className="text-theme-color-100">{span_title}</span></h1>
        </div>
    );
};

export default SectionTitle;