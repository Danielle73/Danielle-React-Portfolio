import '../DarkTheme.css';

function DarkTheme(){
    return (
        <div className="toggle-theme-wrapper">
            <span>☀️</span>
            <label className='toggle-theme' htmlFor='checkox'>
                <input type='checkbox'
                id='checkbox'/>
                <div className="slider-round"></div>
            </label>
            <span>🌒</span>
        </div>
    )
}

export default DarkTheme;