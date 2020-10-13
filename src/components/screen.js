import React, {useEffect} from 'react';
const Screen = props => {
	const {title, screen: ScreenComponent ,match, callback}=props;

    useEffect(() => {
        document.title = `${title}`;
    }, [title]);

    return (
            <ScreenComponent params={match.params} {...props}/>
    );
};
export default Screen;
