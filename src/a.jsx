/**
 * Created by Dzmitry_Siver on 9/12/2017.
 */

var myNews = [
    {
        author: 'СашаПечкин',
        text: 'Вчетчерг,Вчетчергчетвертогочисла...',
        bigText: 'RRRR',
    },
    {
        author: 'ПростоВася',
        text: 'Считаю,Считаючто$долженстоить35рублей!',
        bigText: 'RRRR',
    },
    {
        author: 'Гость',
        text: 'Бесплатно.БесплатноСкачать.БесплатноСкачатьЛучшийсайт-БесплатноСкачатьЛучшийсайтhttp://localhost:3000',
        bigText: 'RRRR',
    }
];

var Article = React.createClass({
    propTypes: {
        data: React.PropTypes.shape({
            author: React.PropTypes.string.isRequired,
            text: React.PropTypes.string.isRequired,
            bigText: React.PropTypes.string.isRequired,
        })
    },
    getInitialState: function () {
        return {
            visible: false,
        }
    },
    readMoreClick: function (e) {
        e.preventDefault();
        this.setState({visible: true});
    },
    render: function () {
        var author = this.props.data.author;
        var text = this.props.data.text;
        var bigText = this.props.data.bigText;
        var visible = this.state.visible;

        var footer;
        if (visible) {
            footer = <p className="article__big-text">{bigText}</p>
        } else {
            footer = <a href="#"
                        onClick={this.readMoreClick}
                        className="news__readmore">More ...</a>
        }

        return (
            <div className="article">
                <p className="article__author">{author}</p>
                <p className="article__text">{text}</p>
                {footer}
            </div>
        );
    }
});
var News = React.createClass({
    propTypes: {
        data: React.PropTypes.array.isRequired,
    },
    render: function () {
        var data = this.props.data;
        var newsTempalte = data.map(function (item, index) {
            return (
                <div key={index}>
                    <Article data={item}/>
                </div>
            );

        });

        return (
            <div className="news">
                {newsTempalte}
                <strong>Total {this.props.data.length}</strong>
            </div>
        );
    }
});
var Add = React.createClass({
    getInitialState: function () {
        return {
            btnIsDisabled: true,
        }
    },
    componentDidMount: function () {
        ReactDOM.findDOMNode(this.refs.author).focus();
    },
    onCheckRule: function (e) {
        this.setState({btnIsDisabled: !this.state.btnIsDisabled});
    },
    onSubmitHandler: function (e) {
        e.preventDefault();
        var author = ReactDOM.findDOMNode(this.refs.author).value;
        var textEl = ReactDOM.findDOMNode(this.refs.article);
        var text = textEl.value;

        var item = [{
            author: author,
            text: text,
            bigText: '...',
        }];

        window.ee.emit('News.add', item);
        textEl.value = '';
        this.setState({btnIsDisabled: true});
    },
    render: function () {
        return (
            <form className="add cf">
                <div>
                    <label> Author </label>
                    <input
                        className="add__author"
                        defaultValue=""
                        ref="author"
                        placeholder="Author"/>
                </div>
                <div>
                    <label> Article </label>
                    <textarea
                        className="add__text"
                        defaultValue=""
                        type="textarea"
                        ref="article"/>
                </div>
                <div>
                    <label
                        className="add__checkrule">
                        <input
                            type="checkbox"
                            defaultChecked={false}
                            onChange={this.onCheckRule}
                            ref="agree_with_rules"/> Agree with rules </label>
                </div>

                <button
                    className="add__btn"
                    type="button"
                    ref="alert_button"
                    disabled={this.state.btnIsDisabled}
                    onClick={this.onSubmitHandler}>
                    Submit
                </button>
            </form>
        );
    },
});

var App = React.createClass({
    getInitialState: function () {
        return {
            news: myNews,
        };
    },
    componentDidMount: function () {
        var self = this;
        window.ee.addListener('News.add', function (item) {
            var nextNews = item.concat(self.state.news);
            self.setState({news: nextNews})
        });
        //listen event create neew
    },
    componentWillUnmount: function () {
        window.ee.removeListener('News.add')
        //unmount event listner
    },
    render: function () {
        return (
            <div className="app">
                <h3>News</h3>
                <Add />
                <News data={this.state.news}/>
            </div>
        )
    }
});

window.ee = new EventEmitter();

ReactDOM.render(
    <App />,
    document.getElementById('root')
);