import { StyleSheet, Text, View, Image } from 'react-native';
import LikeImage from '../../assets/images/like.png';
import {
  Entypo,
  AntDesign,
  FontAwesome5,
  MaterialCommunityIcons,
} from "@expo/vector-icons";


const FeedPost = ({post}) => {
  
  return (
   
      <View style={styles.post}>
         {/* Header */}
      <View style={styles.header}>
        <Image 
        source={{ uri: post.User.image }} 
        style={styles.profileImage} />
        <View>
          <Text style={styles.name}>{post.User.name}</Text>
          <Text style={styles.subtitle}>{post.createdAt}</Text>
        </View>
        <Entypo 
        name="dots-three-horizontal" 
        size={24} 
        color="gray" 
        style={styles.icon}
        />
      </View>
      {/* Body */}
      {post.description && <Text style={styles.description}>{post.description}</Text>}
      {post.image && <Image
      source={{ uri: post.image }}
      style={styles.image}
      />}
      {/* Footer */}
      <View style={styles.footer}>
         {/* Stats row */}
        <View style={styles.statsRow}>
          <Image source={LikeImage} style={styles.likeIcon} />
          <Text style={styles.likedBy}>Elon Musk and {post.numberOfLikes} others</Text>
          <Text style={styles.shares}>{post.numberOfShares} shares</Text>
        </View>
        {/* Buttons row */}
        <View style={styles.buttonsRow}>
          <View style={styles.iconButton}>
            <AntDesign name='like2' size={18} color='gray' />
            <Text style={styles.iconButtonText}>Like</Text>
          </View>

          <View style={styles.iconButton}>
            <FontAwesome5 name='comment-alt' size={18} color='gray' />
            <Text style={styles.iconButtonText}>Comment</Text>
          </View>

          <View style={styles.iconButton}>
            <MaterialCommunityIcons name='share-outline' size={18} color='gray' /> 
            <Text style={styles.iconButtonText}>Share</Text>
          </View>
        </View>
      </View>
      </View> 
       
  );
}

const styles = StyleSheet.create({
  //header
  post: {
    width: "100%",
    marginVertical: 10,
    backgroundColor: "fff",
  },
  header: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  name: {
    fontWeight: "500",
  },
  subtitle: {
    color: "gray",
  },
  icon: {
    marginLeft: "auto",
  },
  //body
  description: {
    padding: 10,
    lineHeight: 20,
    letterSpacing: 0.3,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
    marginTop: 10,
  },
  //footer
  footer: {
    paddingHorizontal: 10,
  },
  statsRow: {
    paddingVertical: 10,
    flexDirection: "row",
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: "#E3E4E6",
  },
  likeIcon: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  likedBy: {
    color: "gray",
  },
  shares: {
    marginLeft: "auto",
    color: "gray",
  },
  // Buttons row
  buttonsRow: {
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  iconButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconButtonText: {
    marginLeft: 5,
    color: "gray",
  },

});

export default FeedPost;