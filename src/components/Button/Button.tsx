export const Button = ({ children, variant, ...props }) => {
    return <button style={{border: `2px solid ${variant} `}} {...props}>{children}</button>
}


