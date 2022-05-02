import React, { Component,useState, useMemo, useRef } from 'react'
import { Card, CardTitle, Col, CardImg, Button } from 'reactstrap'
import { Link } from 'react-router-dom'
import TinderCard from 'react-tinder-card/index'

class PitchCards extends Component {
  constructor(props){
    super(props)
    this.state = {
      newGreenlight: {
        pitch_card_id: "",
      },
      submitted:false
    }

  }

  handleSubmit = (payload) => {
    let { newGreenlight } = this.state
    newGreenlight.pitch_card_id = payload
    this.setState({newGreenlight: newGreenlight})
    this.props.createGreenLight({...this.state.newGreenlight, user_profile_id: this.props.current_user_profile.id})
    this.setState({submitted:true})
    if (this.state.submitted = true){
      window.confirm("You've Greenlit this Startup!")
      window.location.replace("/greenlightindex");
    }
  }

  // ---------------Tinder Cards----------------------------------------------//

Advanced = () => {
  const [currentIndex, setCurrentIndex] = useState(db.length - 1)
  const [lastDirection, setLastDirection] = useState()
  // used for outOfFrame closure
  const currentIndexRef = useRef(currentIndex)

  const childRefs = useMemo(
    () =>
      Array(db.length)
        .fill(0)
        .map((i) => React.createRef()),
    []
  )

  const updateCurrentIndex = (val) => {
    setCurrentIndex(val)
    currentIndexRef.current = val
  }

  const canGoBack = currentIndex < db.length - 1

  const canSwipe = currentIndex >= 0

  // set last direction and decrease current index
  const swiped = (direction, nameToDelete, index) => {
    setLastDirection(direction)
    updateCurrentIndex(index - 1)
  }

  const outOfFrame = (name, idx) => {
    console.log(`${name} (${idx}) left the screen!`, currentIndexRef.current)
    // handle the case in which go back is pressed before card goes outOfFrame
    currentIndexRef.current >= idx && childRefs[idx].current.restoreCard()
    // TODO: when quickly swipe and restore multiple times the same card,
    // it happens multiple outOfFrame events are queued and the card disappear
    // during latest swipes. Only the last outOfFrame event should be considered valid
  }

  const swipe = async (dir) => {
    if (canSwipe && currentIndex < db.length) {
      await childRefs[currentIndex].current.swipe(dir) // Swipe the card!
    }
  }

  // increase current index and show card
  const goBack = async () => {
    if (!canGoBack) return
    const newIndex = currentIndex + 1
    updateCurrentIndex(newIndex)
    await childRefs[newIndex].current.restoreCard()
  }
}

const onSwipe = (direction) => {
  console.log('You swiped: ' + direction)
}

const onCardLeftScreen = (myIdentifier) => {
  console.log(myIdentifier + ' left the screen')
}

const db = [
  {
    name: 'Richard Hendricks',
    url: './img/richard.jpg'
  },
  {
    name: 'Erlich Bachman',
    url: './img/erlich.jpg'
  },
  {
    name: 'Monica Hall',
    url: './img/monica.jpg'
  },
  {
    name: 'Jared Dunn',
    url: './img/jared.jpg'
  },
  {
    name: 'Dinesh Chugtai',
    url: './img/dinesh.jpg'
  }
]

  // --------------- End Tinder Cards------------------------------------------//


  render() {
    return(
      <>
        <div className="fullpagemargins">
          <div className="center-vertical-cards">
              <h2 id="header">Support a Startup!</h2>
              <div className="center-horizontal">
              <br />
              <Col>
                {this.props.pitchCards && this.props.pitchCards.map(pitchCard => {
                  return(
                    <Card body className="index-card" key={pitchCard.id}>
                      <CardImg className="index-image" src={pitchCard.logo} />
                        <CardTitle>
                          <div id="card-title">
                          <h2>{pitchCard.company_name}</h2>
                          <h3>{pitchCard.industry}</h3>
                          </div>
                        </CardTitle>
                        <h2>{pitchCard.funding}</h2><br />
                      <Link to={`/pitchcardshow/${pitchCard.id}`}>
                        <Button className="pitch-button">
                          View Pitch
                        </Button>
                      </Link>
                      <br />
                        <Button className="custom-btn btn btn-secondary" onClick={ ()=> this.handleSubmit(`${pitchCard.id}` )}>Greenlight!</Button>
                    </Card>
                  )
                })}
              </Col>
            </div>
          </div>
        </div>
 
        <div>
      <link
        href='https://fonts.googleapis.com/css?family=Damion&display=swap'
        rel='stylesheet'
      />
      <link
        href='https://fonts.googleapis.com/css?family=Alatsi&display=swap'
        rel='stylesheet'
      />
      <h1>React Tinder Card</h1>
      <div className='cardContainer'>
        {db.map((character, index) => (
          <TinderCard
            ref={childRefs[index]}
            className='swipe'
            key={character.name}
            onSwipe={(dir) => swiped(dir, character.name, index)}
            onCardLeftScreen={() => outOfFrame(character.name, index)}
          >
            <div
              style={{ backgroundImage: 'url(' + character.url + ')' }}
              className='card'
            >
              <h3>{character.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
      <div className='buttons'>
        <button style={{ backgroundColor: !canSwipe && '#c3c4d3' }} onClick={() => swipe('left')}>Swipe left!</button>
        <button style={{ backgroundColor: !canGoBack && '#c3c4d3' }} onClick={() => goBack()}>Undo swipe!</button>
        <button style={{ backgroundColor: !canSwipe && '#c3c4d3' }} onClick={() => swipe('right')}>Swipe right!</button>
      </div>
      {lastDirection ? (
        <h2 key={lastDirection} className='infoText'>
          You swiped {lastDirection}
        </h2>
      ) : (
        <h2 className='infoText'>
          Swipe a card or press a button to get Restore Card button visible!
        </h2>
      )}
    </div>
 
      </>
    )
  }
}

export default PitchCards
