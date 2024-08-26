// () => {}
//component = html + css + jss
const MyComponent = () => {
    //   const datit = "Hoang Tien Dat";
    //   const datit = 25;
    // const datit = true;
    // const datit = null;
    const datit = [1, 2, 3];
    // const datit = {
    //     name: "Hoang Tien Dat",
    //     age: 21

    // }
    return (
        <>  
            <div>{console.log("Hoang Tien Dat")}</div>
           <div> {JSON.stringify(datit)} & chat gpt update</div>
        </> //tag

    );

}
export default MyComponent;