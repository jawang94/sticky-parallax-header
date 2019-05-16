import { StyleSheet, Dimensions } from 'react-native'
import { colors } from './constants'

const { width } = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  titleWrapper: {
    width,
    paddingBottom: 24,
    paddingTop: 18,
    alignItems: 'center',
    flex: 1,
    position: 'absolute'
  },
  toolbarWrapper: {
    width,
    backgroundColor: colors.primaryGreen,
    flexDirection: 'row',
    justifyContent: 'center',
    zIndex: 1
  },
  toolbar: {
    backgroundColor: colors.primaryGreen,
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%'
  },
  tabsContainer: {
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexDirection: 'row'
  },
  tab: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    margin: 5,
    borderRadius: 15,
    backgroundColor: colors.secondaryGreen
  },
  tabText: {
    color: colors.white,
    fontWeight: '500'
  },
  tabWrapper: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between'
  },
  headerStyle: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    justifyContent: 'flex-end',
    marginBottom: 5,
    paddingBottom: 3
  }
})

export default styles
