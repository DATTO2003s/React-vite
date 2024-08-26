
import './style.css'

const SecondComponent = () => {
    return (
        <div>
            Second Component
        </div>
    );
}
const ThirdComponent = () => {
    return (
        <>
            <div className="child">sa</div>
            <div className="child1" style={
                {borderRadius: "10px",backgroundColor: "red"}
                
                }>sb</div>

        </>
    );
}
export { SecondComponent, ThirdComponent };