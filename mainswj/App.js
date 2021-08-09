import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, TextInput, BackHandler, ImageBackground } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderBackButton } from '@react-navigation/stack';
import './assets/css/styles.css';
import './assets/js/scripts.js';

const Stack = createStackNavigator();
let index = 0;
let url = ""
let url1 = "http://swjsearchapi.herokuapp.com/author/search?name=";
let url2 = "https://swjlpapi.herokuapp.com/author/search?leadershipposition=";
let url3 = "http://localhost:8081/search/";

const Main = ({navigation}) => {
  const [name, onChangeName] = React.useState();
  const [lp, onChangeLP] = React.useState();

  url = "";
  return (
  <View>
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <meta name="description" content="" />
      <meta name="author" content="" />
      <title>swj</title>
      <link rel="icon" type="image/x-icon" href="assets/favicon.ico" />

      <script src="https://use.fontawesome.com/releases/v5.15.3/js/all.js" crossorigin="anonymous"></script>

      <link href="https://fonts.googleapis.com/css?family=Varela+Round" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet" />
      <link rel="icon" type="image/x-icon" href="assets/favicon.ico" />

      <link href="/assets/css/styles.css" rel="stylesheet" />

    </head>
    <div id="page-top">
      <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
        <div class="container px-4 px-lg-5">
          <a class="navbar-brand" href="#page-top">SWJ</a>
            <button class="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
              Menu
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item"><a class="nav-link" href="#about">About</a></li>
              <li class="nav-item"><a class="nav-link" href="#contributors">Contributors</a></li>
              <li class="nav-item"><a class="nav-link" href="#references">References</a></li>
            </ul>
          </div>
        </div>
      </nav>

      <header class="masthead">
        <div class="container px-4 px-lg-5 d-flex h-100 align-items-center justify-content-center">
          <div class="d-flex justify-content-center">
            <div class="text-center">
              <View style={{backgroundColor: "white", flex: 1, width: 1000, flexDirection: "row"}}>
                <Text style={{fontSize: 100, justifyContent: "center"}}>
                  SOCIETY OF WOMEN JOURNALISTS{"\n"}1894 - 1914
                </Text>
              </View>
              <div class="container px-4 px-lg-5">
                <View style={styles.searchContainer}>
                  <Text style={styles.searchInst}>Search for members</Text>
                  <TextInput style={styles.input}
                    onChangeText={onChangeName}
                    value={name}
                    placeholder="Name..."/>
                </View>


                <View style={styles.searchContainer}>
                  <TextInput style={styles.input}
                    onChangeText={onChangeLP}
                    value={lp}
                    placeholder="Leadership position..."/>
                  <Text>{"\n\n"}</Text>
                  <Button title="Search"
                    color= 'mediumturquoise'
                    onPress={() => {
                      input(name, lp);
                      navigation.navigate('Search Results');
                  }}/>
                  <StatusBar style="auto" />
                </View>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section class="about-section text-center" id="about">
        <div class="container px-4 px-lg-5">
          <div class="row gx-4 gx-lg-5 justify-content-center">
            <div class="col-lg-8">
              <h2 class="text-white mb-4">About</h2>
              <p class="text-white-50">
                About section
              </p>
            </div>
          </div>
          <div class="about-pic"></div>
        </div>
      </section>

      <section class="projects-section bg-light" id="contributors">
        <div class="container px-4 px-lg-5">
          <div class="row gx-0 mb-5 mb-lg-0 justify-content-center">
            <View style={styles.contributor}>
              <Text style={{textAlign: "justify"}}>
              <Text style={{fontWeight: "bold", fontSize: 20}}>Contributors{"\n"}</Text>
              <Text style={{fontWeight: "bold"}}>Project Director{"\n"}</Text>
              <Text>Laura Vorachek is Associate Professor of English at the University of Dayton. Her research interests include Victorian periodicals, Victorian literature, Jane Austen, and detective fiction.
              Her publications on nineteenth-century British women journalists include:{"\n"}
              “‘How little I cared for fame’: T. Sparrow and Women’s Investigative Journalism at the Fin de Siècle.” Victorian Periodicals Review, vol. 49, no. 2, 2016, pp. 333-61.{"\n"}
              “Playing Italian: Cross-Cultural Dress and Investigative Journalism at the Fin de Siècle.”  Victorian Periodicals Review, vol. 45, no. 4, 2012, pp. 406-35.{"\n"}
              </Text>
              <Text style={{fontWeight: "bold"}}>Data Entry and Research{"\n"}</Text>
              <Text>Mallory Boring is an English major at the University of Dayton. Her research interests include women writers and representations of women in fiction.{"\n"}</Text>
              <Text>Lexi Gallion received her MA in English from the University of Dayton in 2021. Her Master's thesis analyzes Gertrude Blood's (Lady Colin Campbell) journalism through the lens of the flaneuse.{"\n"}</Text>
              <Text style={{fontWeight: "bold"}}>Web Development{"\n"}</Text>
              <Text>Han Le is a Computer Science major at the University of Dayton. Her research interests include software development in Web applications and their security architecture.{"\n"}</Text>
              <Text>Badri Narayanan Krishnamoorthy Venkataramani is a Master’s student at the University of Dayton. His research interests include Cloud Computing and Software Engineering.{"\n"}</Text>
              <Text>Phu Phung is Associate Professor and Director of the Intelligent Systems Security Lab in the Computer Science Department at the University of Dayton. His research leverages programming language and compiler techniques to enforce security policies to defend against cyber attacks in the areas of JavaScript/Web applications, mobile systems, vehicle systems, and Internet of Things frameworks.{"\n"}</Text>
              </Text>
            </View>
          </div>
        </div>
      </section>

      <section id="references">
        <div class="row gx-0 justify-content-center">
        <div class="col-lg-6"><div class="references-section"></div></div>
          <div class="col-lg-6 order-lg-first">
            <View style={styles.contributor}>
              <Text style={{fontWeight: "bold", fontSize: 20, margin: 45, textAlign: "center"}}>References{"\n"}</Text>
              <Text style={{fontWeight: "bold", margin: 45, textAlign: "center"}}>In addition to Society of Women Journalists Annual Reports, information about SWJ members was drawn from the following sources:{"\n"}</Text>
              <Text style={styles.references}>Ancestry (online){"\n"}</Text>
              <Text style={styles.references}>At the Circulating Library (online){"\n"}</Text>
              <Text style={styles.references}>British Periodicals (online){"\n"}</Text>
              <Text style={styles.references}>C19: The Nineteenth Century Index (online){"\n"}</Text>
              <Text style={styles.references}>Google Books (online){"\n"}</Text>
              <Text style={styles.references}>The Journalist (1886-1909){"\n"}</Text>
              <Text style={styles.references}>Myheritage (online){"\n"}</Text>
              <Text style={styles.references}>Oxford Dictionary of National Biography (online){"\n"}</Text>
              <Text style={styles.references}>Prabook (online){"\n"}</Text>
              <Text style={styles.references}>Wikipedia (online){"\n"}</Text>
              <Text style={styles.references}>Who Was Who{"\n"}</Text>
              <Text style={styles.references}>The Woman Journalist (1910-1920){"\n\n\n\n"}</Text>
            </View>
          </div>
        </div>
      </section>

      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js"></script>
      <script src="/assets/js/scripts.js"></script>
      <footer class="footer bg-black small text-center text-white-50"><div class="container px-4 px-lg-5">Copyright &copy; Society of Women Journalists 2021</div></footer>
    </div>
  </View>

  )
}

const input = (name, lp) => {
  if (name != undefined || name != ""){
    url = url1 + name;
  }
  if (name == undefined || name == ""){
    url = url2 + lp;
  }
}

const NameSearchDropDown = (inp) => {
  const [error, setError] = React.useState(null);
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    fetch(url3 + inp, {
      method: "GET"})
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      if (Array.isArray(items) && items.length){
        return items.map((element, i) => {
          if (i < 5){
            return (
              <View style={styles.outerDropDownView}>
                <View style={styles.innerDropDownView}>
                  <Text style={{backgroundColor: "white", textAlign: "left"}}>
                    {element['first_name'] + " " + element['Surname'] + " (Pen name: " + element['pen_name'] + ")"}
                  </Text>
                </View>
              </View>
            )
          }
        })
      }
    }
}

const SearchRes = ({navigation}) => {
  const [error, setError] = React.useState(null);
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    fetch(url, {
      method: "GET"})
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      if (Array.isArray(items) && items.length){
        return items.map((element, i) => {
          if (element['first_name'] != null){
            return (
              <View>
                <Text onPress={() => {
                  index = i;
                  navigation.navigate('Biography')}}
                  style={styles.searchResult}>
                  {element['first_name'] + " " + element['Surname'] + "\n(Start Year: " + element['Startyear'] + " - End Year: " + element['Endyear'] + ")"}
                </Text>
              </View>
            )
          }
          else if (element['first_name'] == null){
            return (
              <View>
                <Text onPress={() => {
                  index = i;
                  navigation.navigate('Biography')}}
                  style={styles.searchResult}>
                  {element['Surname'] + "\n(Start Year: " + element['Startyear'] + " - End Year: " + element['Endyear'] + ")"}
                </Text>
              </View>
            )
          }
        })
      }
      else {
        return (
          <View>
            <Text style={styles.searchResult}>No result matched</Text>
          </View>
        )
      }
    }

}

const Bio = () => {
  const [error, setError] = React.useState(null);
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [items, setItems] = React.useState([]);
  let pf = "";//prefix
  let fn = "";//first name
  let sn = "";//surname
  let pn = "";//pen name
  let dob = "";//DOB
  let dod = "";//DOD
  let lp = "";//leadership position
  let sa = "";//street address
  let nh = "";//neighborhood
  let ct = "";//city
  let pc = "";//post code
  let ps = "";//proposer
  let o1 = "";//org1
  let o2 = "";//org2
  let o3 = "";//org3
  let o4 = "";//org4
  let o5 = "";//org5
  let pd = "";//periodicals
  let si = "";//source of info
  let other = "";//other
  let joined = "";//joined
  let sy = "";//start year
  let ey = "";//end year

  React.useEffect(() => {
    fetch(url, {
      method: "GET"})
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return items.map((element, i) => {
        if (i == index){
          if (element['prefix/title'] != "" && element['prefix/title'] != null && element['prefix/title'] != undefined) pf = element['prefix/title'];
          if (element['first_name'] != "" && element['first_name'] != null && element['first_name'] != undefined) fn = element['first_name'];
          if (element['Surname'] != "" && element['Surname'] != null && element['Surname'] != undefined) sn = element['Surname'];
          if (element['pen_name'] != "" && element['pen_name'] != null && element['pen_name'] != undefined) pn = "Pen name: " + element['pen_name'];
          if (element.DOB != "" && element.DOB != null && element.DOB != undefined) dob = "Date of Birth: " + element['DOB'];
          if (element.DOD != "" && element.DOD != null && element.DOD != undefined) dod = "Date of Death: " + element['DOD'];
          if (element['leadership_position'] != "" && element['leadership_position'] != null && element['leadership_position'] != undefined) lp = "Leadership Position: " + element['leadership_position'];
          if (element['street_address'] != "" && element['street_address'] != null && element['street_address'] != undefined) sa = "Street Address: " + element['street_address'];
          if (element['neighborhood'] != "" && element['neighborhood'] != null && element['neighborhood'] != undefined) nh = "Neighborhood: " + element['neighborhood'];
          if (element['city'] != "" && element['city'] != null && element['city'] != undefined) ct = "City: " + element['city'];
          if (element['post_code'] != "" && element['post_code'] != null && element['post_code'] != undefined) pc = "Post Code: " + element['post_code'];
          if (element['proposer'] != "" && element['proposer'] != null && element['proposer'] != undefined) ps = "Proposer: " + element['proposer'];
          if (element['org1'] != "" && element['org1'] != null && element['org1'] != undefined) o1 = "Organization 1: " + element['org1'];
          if (element['org2'] != "" && element['org2'] != null && element['org2'] != undefined) o2 = "Organization 2: " + element['org2'];
          if (element['org3'] != "" && element['org3'] != null && element['org3'] != undefined) o3 = "Organization 3: " + element['org3'];
          if (element['org4'] != "" && element['org4'] != null && element['org4'] != undefined) o4 = "Organization 4: " + element['org4'];
          if (element['org5'] != "" && element['org5'] != null && element['org5'] != undefined) o5 = "Organization 5: " + element['org5'];
          if (element['periodicals'] != "" && element['periodicals'] != null && element['periodicals'] != undefined) pd = "Periodicals: " + element['periodicals'];
          if (element['source_of_info'] != "" && element['source_of_info'] != null && element['source_of_info'] != undefined) si = "Source of Information: " + element['source_of_info'];
          if (element['other'] != "" && element['other'] != null && element['other'] != undefined) other = "Other: " + element['other'];
          if (element['Joined'] != "" && element['Joined'] != null && element['Joined'] != undefined) joined = "Joined: " + element['joined'];
          if (element['Startyear'] != "" && element['Startyear'] != null && element['Startyear'] != undefined) sy = "Start Year: " + element['Startyear'];
          if (element['Endyear'] != "" && element['Endyear'] != null && element['Endyear'] != undefined) ey = "End Year: " + element['Endyear'];
            return(
              <View>
                <header class="masthead">
                  <div class="container px-4 px-lg-5">
                    <View style={styles.bioContainer}>
                      <Text style={styles.bio}>{pf + " " + fn + " " + sn}</Text>
                      <Text style={styles.bio}>{pn}</Text>
                      <Text style={styles.bio}>{dob}</Text>
                      <Text style={styles.bio}>{dod}</Text>
                      <Text style={styles.bio}>{lp}</Text>
                      <Text style={styles.bio}>{sa}</Text>
                      <Text style={styles.bio}>{nh}</Text>
                      <Text style={styles.bio}>{ct}</Text>
                      <Text style={styles.bio}>{pc}</Text>
                      <Text style={styles.bio}>{ps}</Text>
                      <Text style={styles.bio}>{o1}</Text>
                      <Text style={styles.bio}>{o2}</Text>
                      <Text style={styles.bio}>{o3}</Text>
                      <Text style={styles.bio}>{o4}</Text>
                      <Text style={styles.bio}>{o5}</Text>
                      <Text style={styles.bio}>{pd}</Text>
                      <Text style={styles.bio}>{si}</Text>
                      <Text style={styles.bio}>{other}</Text>
                      <Text style={styles.bio}>{joined}</Text>
                      <Text style={styles.bio}>{sy}</Text>
                      <Text style={styles.bio}>{ey}</Text>
                    </View>
                  </div>
                </header>
              </View>
            )
          }
        })

    }

}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={Main}/>
        <Stack.Screen name="Search Results" component={SearchRes}/>
        <Stack.Screen name="Biography" component={Bio}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  outerDropDownView: {
    alignItems: "flex-end",
    end: 40,
  },
  innerDropDownView: {
    marginTop: 0,
    marginBottom: 10,
    height: 10,
    width: 500,
  },
  input: {
    backgroundColor: "white",
    height: 30,
    borderWidth: 2,
    marginBottom: 0,
    marginTop: 20,
    fontSize: 15,
  },
  searchInst: {
    fontSize: 20,
    color: "white",
    marginTop: 20,
  },
  contributor:{
    backgroundColor: "antiquewhite",
  },
  references:{
    margin: 45,
    textAlign: "center",
  },
  searchResult: {
    fontSize: 25,
  },
  bioContainer: {
    backgroundColor: 'white',
    height: 750,
  },
  bio: {
    fontSize: 20,
  },
});

export default App;
