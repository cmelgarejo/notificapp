import React, { Component } from 'react'
import { Badge, Button, DropdownButton, Col, Glyphicon, Grid, Image, Media, Row } from 'react-bootstrap'
import axios from 'axios'
import moment from 'moment'
import Styles from './styles'

const dateFormat = 'DD/MM/YYYY H:mm'
export default class ArtworkComments extends Component {
    state = {
        notifications: []
    }
    
    messageCreated = (date) =>  moment(date, dateFormat).fromNow() //helper method for "x <units of time> ago"
    
    async componentWillMount() {
        const response = await axios.get('/comment_data.json')
        if(response.status === 200)
            this.setState({ notifications: response.data.sort((info, previous) => {
                    return moment(previous.dates.created.date_time, dateFormat).diff(moment(info.dates.created.date_time, dateFormat))
                })
            })
    }

    handleMark = (id) => {
        let { notifications } = this.state
        this.setState({notifications: notifications.map(info => {
                info.acknowledged = info.id == id ? true : info.acknowledged
                return info
            })
        })
    }

    render() {
        const { notifications } = this.state,
            unreadCount = notifications.filter(info => !info.acknowledged).length,
            bellStyle = unreadCount > 0 ? 'primary' : 'default'
        return (
            <DropdownButton animation noCaret bsStyle={bellStyle} title={
                    <span>
                        <Glyphicon glyph="bell"/>
                        {unreadCount > 0 &&  <Badge>{unreadCount}</Badge>}
                    </span>
                }
            >
                <div style={{ ...Styles.NotificationWindow }}>
                {
                    notifications.map((info, key ) => {                            
                        return (
                            <div key={key}>
                                <Media>
                                    <Media.Left align="top">
                                        <Image width={32} src={info.user.image.thumb_url} circle/>
                                    </Media.Left>
                                    <Media.Body style={{ ...Styles.Media.General }}>
                                        <Media.Heading style={{ ...Styles.Media.Heading }}>{info.user.full_name}</Media.Heading>
                                        <span style={{ ...Styles.Media.Body }}>{info.body}</span>
                                        <br/>
                                        <span style={{ ...Styles.Media.CreatedDate }}>{this.messageCreated(info.dates.created.date_time)}</span>
                                        {
                                            !info.acknowledged?
                                                <span style={{ ...Styles.Acknowledged.span }}> |
                                                    <a style={{ ...Styles.Acknowledged.a }} onClick={(ev) => this.handleMark(info.id)}>
                                                        Mark as seen
                                                    </a>
                                                </span>
                                            :
                                                <span>
                                                    <Glyphicon glyph="ok" style={{ ...Styles.Acknowledged.icon }}/>
                                                </span>
                                        }
                                    </Media.Body>
                                </Media>
                                <hr style={{ ...Styles.hr }} />
                            </div>
                        )
                    })
                }
                </div>
            </DropdownButton>
        )
    }
}