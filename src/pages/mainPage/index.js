
import { connect } from 'dva';

function BasicLayout(props) {
    return (
        <div>
            <h1>Yay! Welcome to umi!</h1>
        </div>
    );
}

function mapStateToProps({ mainPage, global }){
    return { mainPage, global }
}
export default connect(mapStateToProps)(BasicLayout)
