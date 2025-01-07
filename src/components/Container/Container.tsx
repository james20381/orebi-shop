interface Props {
    children: React.ReactNode;
    className?: string; /* ? = If there is extra className styles applied to the className prop. The ? is a ts conditional that gives the developer an option to add extra classNames. If no extra classNames are needed, the 'ts ?' prevents an error being thrown. */
}

const Container = ({ children, className }: Props) => {
    return (
        <div className={`max-w-[80%] mx-auto py-5 px-4 lg:px-0 ${className}`}>
            {children}
        </div>
    );
};

export default Container;