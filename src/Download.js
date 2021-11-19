import { Samples } from './styles/global';
import StartButton from './components/startNami'; 

function DownloadPg() {
    return(  
        <Samples>
			<div className="content">
				<div className="title" style={{'textAlign':'center'}}>Download</div>
                <StartButton></StartButton>
            </div>
        </Samples> 
    )
} 

export default DownloadPg;