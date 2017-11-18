/*
    price: {type: Number},
	name: {type:String},
	description: {type:String},
	picture: {type:String},
	currency: {type:String},
	stock: {type: Boolean},
	category: {type:String}
		*/
import React from "react";

class AdminItemComponent extends React.Component {
	constructor(props){
		super(props);
		this.state = {
		    editMode: false,
		    item: this.props.item
		    
		};
	}
    renderEditMode = ()=>{
        return (
            <div>
                <div className={"editSumitButton"}>
                    <button onClick={()=>{this.props.submitEdit()}}>Submit</button>
                   </div> 
                <div>
                <input type="text" value={this.state.item.name}/>
                <input type="text" value={this.state.item.currency}/>
                <input type="text" value={this.state.item.price}/>
                <textarea  value={this.state.item.description}/>
                <select value={this.props.categoriesHash[this.state.item.category].name} onChange={(event)=>this.props.updateItem(this.state.item._id,event.target.value)}>
                	{
                		
                		this.props.categories.map((category)=>{
                			return (<option value={category}>{this.props.categoriesHash[category].name}</option>);
                		})
                	}
                </select>
                </div>
            </div>
            );
    }
	render=()=>{
	        const item = this.state.item;
	        return (
	        <div className={"adminSingleItem"}>
	            <div className={"singleItem"} key={item._id}>	
					<div className={"itemStats"}>
						<div >{item.name}</div>
						<div>{item.price}{item.currency}</div>
					</div>
													
					<div className={"itemDescription"}>{item.description}</div>
													
					<div className={"itemButtons"}>
						<div className={"removeOrderButton"}>
							<button className={"itemSingleButton removeButton"} onClick={()=>this.props.removeItem(item)}>Remove</button>
						</div>
						<div className={"editeItemButton"}>
							<button className={"itemSingleButton editButton"} onClick={()=>this.setState({editMode:!this.state.editMode})}>{this.state.editMode?"Cancel":"Edit"}</button>
						</div>
					</div>
				</div>
				{this.state.editMode && this.renderEditMode()}
	        </div>);
	    
	}
}
export default AdminItemComponent;