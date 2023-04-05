
import {connect} from 'react-redux'

import {addToCart} from '../service/actions/actions'
import Imgcard from '../Imgcard/Imgcard'
const mapStateToProps=state=>({
    data:state.cardItems
})
const mapDispatchToProps=dispatch=>({
})
export default connect(mapStateToProps,mapDispatchToProps)(Imgcard)
// export default Home;