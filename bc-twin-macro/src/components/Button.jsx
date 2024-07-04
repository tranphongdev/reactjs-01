import tw from 'twin.macro';

const styles = {
    pink: tw`bg-[#FF64AE]  hover:bg-[#cb4c89]`,
};

const Button = ({ children, clickAction, color, type }) => (
    <button
        type={type || 'button'}
        css={[
            tw`my-2 py-[14px] px-[41px]`,
            tw`font-medium text-white`,
            tw`rounded-[50px] transition-all`,
            styles[color],
        ]}
        onClick={clickAction}
    >
        {children}
    </button>
);

export default Button;
