import '../DarkTheme.css';

function DarkTheme(){
    return (
        <div className="toggle-theme-wrapper flex items-center gap-2 px-8">
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