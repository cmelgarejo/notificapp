const Colors = {
    Blue: '#02b7e2',
    DarkGrey: '#404041',
    LightGrey: '#8c8c8e',
    LineColour: '#d8d9d9',
    MarkAsSeen: '#c45500'
}

const Styles = {
    NotificationWindow: {
        backgroundColor: '#FEFEFE',
        width: 300,
        maxHeight: 280, 
        padding: 10, 
        overflowY: 'scroll' 
    },
    Media: {
        General: { fontSize: 12 },
        Heading: { color: Colors.Blue, fontSize: 14 },
        Body: { color: Colors.DarkGrey },
        CreatedDate: { color: Colors.LightGrey }
    },
    Acknowledged: {
        span: { color: Colors.LightGrey, paddingRight: 5 },
        a: { color: Colors.MarkAsSeen, paddingLeft: 5, cursor: 'pointer' },
        icon: { paddingLeft: 5, color: 'green'}
    },
    hr: { borderTop: `1px dashed ${Colors.LineColour}`, marginTop: 12}
}
export default Styles