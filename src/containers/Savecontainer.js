import {connect} from 'react-redux'
import {AddToSaveData} from '../service/actions/actions'
import CompactCard from '../Card/CompactCard'








const mapStateToProps=state=>({
     data:state.cardItems
})
const mapDispatchToProps=dispatch=>({
    addToCartHandler:data=>dispatch(AddToSaveData(data))

})
export default connect(mapStateToProps,mapDispatchToProps)(CompactCard)