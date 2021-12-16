var React = require('react');
 
class SearchPlugin extends React.Component{
              
    constructor(props){
        super(props);
        this.onTextChanged = this.onTextChanged.bind(this);
    }
              
    onTextChanged(e){
        var text = e.target.value.trim();   // удалить пробелы
        this.props.filter(text); // передать введенный текст в родительский компонент
    }
              
    render() {
        return <input placeholder="Search" onChange={this.onTextChanged} />;
    }
}
 
module.exports = SearchPlugin;