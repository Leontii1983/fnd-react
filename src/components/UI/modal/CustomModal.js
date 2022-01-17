import classes from './CustomModal.module.css';

const CustomModal = ({children, visible, setVisible}) => {
    const mainClasses = [classes.customMod];

    if(visible) {
        mainClasses.push(classes.active);
    }
    return(
        <div className={mainClasses.join(' ')} onClick={()=> setVisible(false)}>
            <div className={classes.customModContent} onClick={(e)=> e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}

export default CustomModal;