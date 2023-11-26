import { TextField,Autocomplete,Button } from "@mui/material";
function Field(){
    return(
        <div sx={{display:"flex",flexDirection:"column",width:600}}>
        <h1>Enter your name favourite fruit:</h1>
       <TextField data-testid="name" label="Name" variant="standard"sx={{height: 70,width: 250}}/>
       <Autocomplete data-testid="autocomplete" options={favfruit} renderInput={(params)=>
       <TextField{...params} data-testid="fruit" label="Choose a fruit"/>} sx={{height: 70,width:500}}
       />
        <Button data-testid="button" variant="contained" onClick={()=>{<p>Hello, [name]!Your favourite fruit is [fruit].</p>}}sx={{width:100}}>SUBMIT</Button> 
       </div>
    );
}
const favfruit=[
    { label: 'Apple'},
    {label: 'Banana'},
    {label: 'Cherry'},
    {label: 'Durain'},
    {label: 'Elderberry'}
];
export default Field;