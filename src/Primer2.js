import React from 'react';

class Child extends React.Component{
    constructor (props){
        super(props);

        this.state = {
            age: 40
        }
        this.handlerChange2 = this.handlerChange2.bind(this)
    }

    handlerChange = (e) => {
        this.setState({age: e.target.value})
    }

    handlerChange2(e){
        this.setState({age: e.target.value})
    }

    render(){
        return (
            <>
                <h1>Имя: {this.props.name}</h1>
                <h3>Возраст: {this.props.age}</h3>
                <h3>Возраст локальный: {this.state.age}</h3>
                <label>Изменение возраста через callback</label>
                <input type="number" value={this.state.age} onChange={(e)=>this.setState({age: e.target.value})} />
                <p>{this.state.age}</p>
                <label>Изменение возраста2 </label>
                <input type="number" value={this.state.age} onChange={this.handlerChange} />
                <p>{this.state.age}</p>
                <label>Изменение возраста через bind</label>
                <input type="number" value={this.state.age} onChange={this.handlerChange2} />
                <p>{this.state.age}</p>
                <label>Изменение возраста через bind</label>
                <input type="number" value={this.state.age} onChange={this.handlerChange2.bind(this)} />
                <p>{this.state.age}</p>

                <label>Изменение возраста в родительском компоненте</label>
                <input type="number" value={this.props.age} onChange={this.props.onChangeAge} />
                <p>{this.props.age}</p>
            </>
        )
    }
}

class Parent extends React.Component{
    state = {
        name: "Николай",
        age: 41
    }

    handlerChange = (e) => {
        this.setState({age: e.target.value})
    }

    render(){
        return (
            <>
                <Child name={this.state.name} age={this.state.age} onChangeAge={this.handlerChange}/>
            </>
        )

    }
}

export default Parent;