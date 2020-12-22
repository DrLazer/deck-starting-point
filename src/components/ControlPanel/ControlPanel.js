import IconButton from '@material-ui/core/IconButton';
import CropFreeIcon from '@material-ui/icons/CropFree';
import GestureIcon from '@material-ui/icons/Gesture';
import FormatShapesIcon from '@material-ui/icons/FormatShapes';

import { useGlobalState } from '../../context/GlobalContext';
import ControlPanelTools from './../../components/ControlPanel/ControlPanelTools';
import './control-panel.scss';

export default function ControlPanel(props) {

  const { activeTool, setActiveTool } = useGlobalState();
  
  const selectTool = selection => {
    if(activeTool === selection) {
      setActiveTool(ControlPanelTools.NONE);
    } else {
      setActiveTool(selection);
    }
  }

  return (
    <div className='control-panel'>
      <IconButton aria-label='bounding box' component='span' className={ activeTool === ControlPanelTools.BOUNDING_BOX ? 'active-tool' : ''}
        onClick={() => { selectTool(ControlPanelTools.BOUNDING_BOX);}}>
        <CropFreeIcon />
      </IconButton>
      <IconButton aria-label='polygon' component='span' className={ activeTool === ControlPanelTools.POLYGON ? 'active-tool' : ''}
        onClick={() => { selectTool(ControlPanelTools.POLYGON);}}>
        <FormatShapesIcon />
      </IconButton>
      <IconButton aria-label='free select' component='span' className={ activeTool === ControlPanelTools.FREE_SELECT ? 'active-tool' : ''}
        onClick={() => { selectTool(ControlPanelTools.FREE_SELECT);}}>
        <GestureIcon />
      </IconButton>
    </div>
  )

}