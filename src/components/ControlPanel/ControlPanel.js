import IconButton from '@material-ui/core/IconButton';
import CropFreeIcon from '@material-ui/icons/CropFree';
import GestureIcon from '@material-ui/icons/Gesture';
import FormatShapesIcon from '@material-ui/icons/FormatShapes';

import ControlPanelTools from './../../components/ControlPanel/ControlPanelTools';
import './control-panel.scss';



export default function ControlPanel(props) {
  
  const selectTool = selection => {
    console.log(selection);
  }

  return (
    <div className='control-panel'>
      <IconButton aria-label="bounding box" component="span"
        onClick={() => { selectTool(ControlPanelTools.BOUNDING_BOX);}}>
        <CropFreeIcon />
      </IconButton>
      <IconButton aria-label="polygon" component="span"
        onClick={() => { selectTool(ControlPanelTools.POLYGON);}}>
        <FormatShapesIcon />
      </IconButton>
      <IconButton aria-label="free select" component="span"
        onClick={() => { selectTool(ControlPanelTools.FREE_SELECT);}}>
        <GestureIcon />
      </IconButton>
    </div>
  )

}