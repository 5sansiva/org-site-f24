import React from 'react';

export default function JoinUs() {
  return (
    <section style={styles.wrapper}>
      <h2 style={styles.title}>Join as a...</h2>

      <div style={styles.boxContainer}>

        <div style={{ ...styles.box, ...styles.boxMentor }}>
          <div style={styles.logoHeader}>
            <div style={styles.starWrapper}>
              <img
                src="/AIM/white star-Picsart-BackgroundRemover 20.png"
                alt="Star"
                style={styles.starImage}
              />
            </div>

            <div style={styles.blobWrapperMentor}>
              <div style={styles.blobBackgroundMentor}></div>
              <h3 style={styles.textMentor}>Mentor</h3>
            </div>
          </div>

          <ul style={styles.list}>
            <li style={styles.listItem}><span style={styles.checkbox}></span>Gain experience leading a team</li>
            <li style={styles.listItem}><span style={styles.checkbox}></span>Strengthen your AI skills</li>
            <li style={styles.listItem}><span style={styles.checkbox}></span>Develop your dream AI project with the backing of AIS</li>
            <li style={styles.listItem}><span style={styles.checkbox}></span>Present to industry experts</li>
            <li style={styles.listItem}><span style={styles.checkbox}></span>Further pursue project under AI Innovation</li>
          </ul>
        </div>

        <div style={{ ...styles.box, ...styles.boxMentee }}>
          <div style={styles.logoHeader}>
            <div style={styles.starWrapper}>
              <img
                src="/AIM/white star-Picsart-BackgroundRemover 20.png"
                alt="Star"
                style={styles.starImage}
              />
            </div>

            <div style={styles.blobWrapperMentee}>
              <div style={styles.blobBackgroundMentee}></div>
              <h3 style={styles.textMentee}>Mentee</h3>
            </div>
          </div>

          <ul style={styles.list}>
            <li style={styles.listItem}><span style={styles.checkbox}></span>Gain experience with building AI solutions</li>
            <li style={styles.listItem}><span style={styles.checkbox}></span>Access to weekly AI and ML workshops</li>
            <li style={styles.listItem}><span style={styles.checkbox}></span>Present to industry experts</li>
            <li style={styles.listItem}><span style={styles.checkbox}></span>Birth and engage in research stemming from your project</li>
          </ul>
        </div>
      </div>

      <button style={styles.remindButton}>remind me to apply</button>
    </section>
  );
}

const styles: Record<string, React.CSSProperties> = {
  wrapper: {
    padding: '60px 20px',
    textAlign: 'center',
    background: '#253E66',
    color: 'white',
    minHeight: '100vh',
    fontFamily: 'sans-serif',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    fontSize: '32px',
    marginBottom: '50px',
    fontWeight: 600,
  },
  boxContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '30px',
    flexWrap: 'wrap',
    maxWidth: '1000px',
    width: '100%',
  },
  box: {
    flex: '1',
    minWidth: '300px',
    maxWidth: '400px',
    background: 'rgba(255, 255, 255, 0.05)',
    padding: '30px',
    borderRadius: '16px',
    borderWidth: '2px',
    borderStyle: 'solid',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    textAlign: 'left',
    position: 'relative',
  },
  boxMentor: { borderColor: '#5CB85C' },
  boxMentee: { borderColor: '#4A90E2' },

  logoHeader: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',
    paddingLeft: '10px',
  },

  starWrapper: {
    width: '43px',
    height: '43px',
    marginRight: '-12px',
    zIndex: 2,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    top: '-4px',
  },

  starImage: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
    filter: 'drop-shadow(0 0 4px rgba(255,255,255,0.6))',
  },

  blobWrapperMentor: {
    position: 'relative',
    width: '135px',
    height: '48px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transform: 'rotate(-2deg)',
    zIndex: 1,
  },
  blobBackgroundMentor: {
    position: 'absolute',
    inset: 0,
    background: '#76D15D',
    borderRadius: '30px',
    boxShadow: '2px 2px 0px rgba(0,0,0,0.2)',
    zIndex: -1,
  },
  textMentor: {
    margin: 0,
    fontSize: '30px',
    color: '#3b5ba5',
    fontWeight: 900,
    WebkitTextStroke: '1px #76D15D',
    zIndex: 2,
    paddingTop: '2px',
  },

  blobWrapperMentee: {
    position: 'relative',
    width: '140px',
    height: '48px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transform: 'rotate(-2deg)',
    zIndex: 1,
  },
  blobBackgroundMentee: {
    position: 'absolute',
    inset: 0,
    background: '#3b5ba5',
    borderRadius: '30px',
    boxShadow: '2px 2px 0px rgba(0,0,0,0.2)',
    zIndex: -1,
  },
  textMentee: {
    margin: 0,
    fontSize: '28px',
    color: '#76D15D',
    fontWeight: 900,
    WebkitTextStroke: '1px #3b5ba5',
    zIndex: 2,
    paddingTop: '2px',
  },

  list: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    width: '100%',
    marginTop: '10px',
  },
  listItem: {
    display: 'flex',
    alignItems: 'flex-start',
    marginBottom: '12px',
    fontSize: '16px',
    lineHeight: '1.4',
    fontWeight: 300,
  },
  checkbox: {
    minWidth: '16px',
    height: '16px',
    border: '1px solid rgba(255,255,255,0.6)',
    borderRadius: '2px',
    marginRight: '12px',
    marginTop: '4px',
  },
  remindButton: {
    marginTop: '50px',
    background: 'rgba(30, 50, 90, 0.8)',
    border: '1px solid #4A6FA5',
    color: '#5CB85C',
    padding: '12px 24px',
    borderRadius: '30px',
    fontSize: '16px',
    cursor: 'pointer',
    boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
  },
};
