import IconButton from '@material-ui/core/IconButton';
import CropFreeIcon from '@material-ui/icons/CropFree';

import './control-panel.scss';

export default function ControlPanel(props) {
  
  return (
    <div className='control-panel'>
      <IconButton aria-label="bounding box" component="span">
        <CropFreeIcon />
      </IconButton>
    </div>
  )

}