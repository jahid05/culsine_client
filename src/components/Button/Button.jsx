
// eslint-disable-next-line react/prop-types
const Button = ({commonButton}) => {
    return (
        <div>
            <button className=" hover:bg-theme-color-200 border-none transition-all focus:scale-105 duration-500 ease-in-out normal-case bg-theme-color-100 text-white md:text-lg rounded-t-3xl rounded-s-3xl rounded-none py-2 md:py-3  px-5 md:px-8">{commonButton}</button>
        </div>
    );
};

export default Button;