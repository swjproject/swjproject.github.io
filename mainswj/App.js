import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, TextInput, BackHandler, ImageBackground } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderBackButton } from '@react-navigation/stack';
import './assets/css/styles.css';
import './assets/js/scripts.js';

const Stack = createStackNavigator();
let searchInp = "";
let index = 0;
let url = "https://appmockapi.herokuapp.com/author/search?name=";
let url2 = "http://localhost:3000/search?name=";

const Main = ({navigation}) => {
  const [name, onChangeName] = React.useState();

  searchInp = "";
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
                          <Text>{"\n\n"}</Text>
                          <h1 class="mx-auto my-0 text-uppercase">Society of Women Journalists</h1>
                            <div class="container px-4 px-lg-5">
                              <View style={styles.searchContainer}>
                              <Text>{"\n\n"}</Text>
                              <Text style={styles.searchInst}>Search for any journalist by</Text>
                              <Text style={styles.searchInst}>inputting a first name, last name, or pen name</Text>

                                <TextInput style={styles.input}
                                  onChangeText={onChangeName}
                                  value={name}
                                  placeholder="Name..."/>

                                <Button title="Search"
                                  color= 'mediumturquoise'
                                  onPress={() => {
                                    if (searchInp == "" && name != undefined)
                                      searchInp = name;
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
                          <h2 class="text-white mb-4">About Us</h2>
                          <p class="text-white-50">
                              About Us section
                          </p>
                      </div>
                  </div>
                  <img class="img-fluid" src="https://php-bootstrap.com/templates/grayscale/img/bg-masthead.jpg" alt="..." />
              </div>
          </section>

          <section class="projects-section bg-light" id="contributors">
              <div class="container px-4 px-lg-5">

              <div class="row gx-0 mb-5 mb-lg-0 justify-content-center">

                <div class="col-lg-6">
                    <div class="bg-black text-center h-100 project">
                        <div class="d-flex h-100">
                            <div class="project-text w-100 my-auto text-center text-lg-left">
                                <h4 class="text-white">Contributors</h4>
                                <p class="text-white">Project Director</p>
                                <p class="mb-0 text-white-50">Laura Vorachek is Associate Professor of English at the University of Dayton. Her research interests include Victorian periodicals, Victorian literature, Jane Austen, and detective fiction.
                                Her publications on nineteenth-century British women journalists include:</p>
                                <p class="mb-0 text-white-50">“‘How little I cared for fame’: T. Sparrow and Women’s Investigative Journalism at the Fin de Siècle.” Victorian Periodicals Review, vol. 49, no. 2, 2016, pp. 333-61.</p>
                                <p class="mb-0 text-white-50">“Playing Italian: Cross-Cultural Dress and Investigative Journalism at the Fin de Siècle.”  Victorian Periodicals Review, vol. 45, no. 4, 2012, pp. 406-35.</p>
                                <p class="text-white">Data Entry and Research</p>
                                <p class="mb-0 text-white-50">Mallory Boring is an English major at the University of Dayton. Her research interests include women writers and representations of women in fiction.</p>
                                <p class="mb-0 text-white-50">Lexi Gallion received her MA in English from the University of Dayton in 2021. Her Master's thesis analyzes Gertrude Blood's (Lady Colin Campbell) journalism through the lens of the flaneuse.</p>
                                <p class="text-white">Web Development</p>
                                <p class="mb-0 text-white-50">Han Le is a Computer Science major at the University of Dayton. Her research interests include software development in Web applications and their security architecture.</p>
                                <p class="mb-0 text-white-50">Badri Narayanan Krishnamoorthy Venkataramani is a Master’s student at the University of Dayton. His research interests include Cloud Computing and Software Engineering.</p>
                                <p class="mb-0 text-white-50">Phu Phung is Associate Professor and Director of the Intelligent Systems Security Lab in the Computer Science Department at the University of Dayton. His research leverages programming language and compiler techniques to enforce security policies to defend against cyber attacks in the areas of JavaScript/Web applications, mobile systems, vehicle systems, and Internet of Things frameworks.</p>
                                <hr class="d-none d-lg-block mb-0 ms-0" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </section>

          <section class="references-section" id="references">
              <div class="container px-4 px-lg-5">
                  <div class="row gx-4 gx-lg-5">
                      <div class="col-md-10 col-lg-8 mx-auto text-center">
                          <h2 class="text-white mb-5">References</h2>
                          <p class="text-white">In addition to Society of Women Journalists Annual Reports, information about SWJ members was drawn from the following sources:</p>
                          <p class="text-white">Ancestry (online)</p>
                          <p class="text-white">At the Circulating Library (online)</p>
                          <p class="text-white">British Periodicals (online)</p>
                          <p class="text-white">C19: The Nineteenth Century Index (online)</p>
                          <p class="text-white">Google Books (online)</p>
                          <p class="text-white">The Journalist (1886-1909)</p>
                          <p class="text-white">Myheritage (online)</p>
                          <p class="text-white">Oxford Dictionary of National Biography (online)</p>
                          <p class="text-white">Prabook (online)</p>
                          <p class="text-white">Wikipedia (online)</p>
                          <p class="text-white">Who Was Who</p>
                          <p class="text-white">The Woman Journalist (1910-1920)</p>
                      </div>
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

const SearchDropDown = (inp) => {
  const [error, setError] = React.useState(null);
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    fetch(url2 + inp, {
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
            return (
              <View>
                <Text style={{backgroundColor: "white"}}>
                  {element['first_name'] + " " + element['Surname'] + " Pen name: " + element['pen_name']}
                </Text>
              </View>
            )
        })
    }
    }
}

const SearchRes = ({navigation}) => {
  const [error, setError] = React.useState(null);
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    fetch(url + searchInp, {
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
    fetch(url + searchInp, {
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
          if (element['prefix/title'] != null) pf = element['prefix/title'];
          if (element['first_name'] != null) fn = element['first_name'];
          if (element['Surname'] != null) sn = element['Surname'];
          element['pen_name'] != null ? pn = "Pen name: " + element['pen_name'] : pn = "";
          element.DOB != null ? dob = "Date of Birth: " + element['DOB'] : dob = "";
          element.DOD != null ? dod = "Date of Death: " + element['DOD'] : dod = "";
          element['leadership_position'] != null ? lp = "Leadership Position: " + element['leadership_position'] : lp = "";
          element['street_address'] != null ? sa = "Street Address: " + element['street_address'] : sa = "";
          element['neighborhood'] != null ? nh = "Neighborhood: " + element['neighborhood'] : nh = "";
          element['city'] != null ? ct = "City: " + element['city'] : ct = "";
          element['post_code'] != null ? pc = "Post Code: " + element['post_code'] : pc = "";
          element['proposer'] != null ? ps = "Proposer: " + element['proposer'] : ps = "";
          element['org1'] != null ? o1 = "Organization 1: " + element['org1'] : o1 = "";
          element['org2'] != null ? o2 = "Organization 2: " + element['org2'] : o2 = "";
          element['org3'] != null ? o3 = "Organization 3: " + element['org3'] : o3 = "";
          element['org4'] != null ? o4 = "Organization 4: " + element['org4'] : o4 = "";
          element['org5'] != null ? o5 = "Organization 5: " + element['org5'] : o5 = "";
          element['periodicals'] != null ? pd = "Periodicals: " + element['periodicals'] : pd = "";
          element['source_of_info'] != null ? si = "Source of Information: " + element['source_of_info'] : si = "";
          element['other'] != null ? other = "Other: " + element['other'] : other = "";
          element['Joined'] != null ? joined = "Joined: " + element['joined'] : joined = "";
          element['Startyear'] != null ? sy = "Start Year: " + element['Startyear'] : sy = "";
          element['Endyear'] != null ? ey = "End Year: " + element['Endyear'] : ey = "";
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
  image:{
    flex: 1,
    justifyContent: "center"
  },
  buttonContainer:{
    justifyContent: 'space-between',
    alignItems: 'stretch',
    flexDirection: 'row',
    marginBottom: 20,
  },
  searchContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    backgroundColor: "white",
    height: 30,
    borderWidth: 2,
    margin:50,
    fontSize: 15,
  },
  header: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
  },
  searchNav: {
    fontSize: 25,
    color: "white",
    textDecorationLine: 'underline',
  },
  searchInst: {
    fontSize: 20,
    color: "white",
  },
  searchResContainer: {
    flex: 1,
    backgroundColor: 'grey',
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
  web: {
     flex: 1
  },
});

export default App;
