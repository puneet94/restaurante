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

class AdminCategoryComponent extends React.Component {
	constructor(props){
		super(props);
		this.state = {
		    editMode: false,
		    category: this.props.category
		    
		};
	}
    renderEditMode = ()=>{
        return (
            <div>
                <div className={"editSumitButton"}>
                    <button onClick={()=>{this.props.submitEdit()}}>Submit</button>
                   </div> 
                <div>
                <input type="text" value={this.state.category.name}/>
                
                <input type="text" value={this.state.category.sortOrder}/>
                <textarea  value={this.state.category.description}/>
                <select value={this.props.categoriesHash[this.state.category.category].name} onChange={(event)=>this.props.updateCategory(this.state.category._id,event.target.value)}>
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
	        const category = this.state.category;
	        return (
	        <div className={"adminSingleCategory"}>
	            <div className={"singleCategory"} key={category._id}>	
					<div className={"categoryStats"}>
						<div >{category.name}</div>
						<div>{category.sortOrder}</div>
					</div>
													
					<div className={"categoryDescription"}>{category.description}</div>
													
					<div className={"categoryButtons"}>
						<div className={"removeOrderButton"}>
							<button className={"categorySingleButton removeButton"} onClick={()=>this.props.removeCategory(category)}>Remove</button>
						</div>
						<div className={"editeCategoryButton"}>
							<button className={"categorySingleButton editButton"} onClick={()=>this.setState({editMode:!this.state.editMode})}>{this.state.editMode?"Cancel":"Edit"}</button>
						</div>
					</div>
				</div>
				{this.state.editMode && this.renderEditMode()}
	        </div>);
	    
	}
}
export default AdminCategoryComponent;