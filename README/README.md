![](Aspose.Words.90a8b765-1ac0-40ac-a709-d918cc7cf522.001.png)

Gerekli Ortam

- Version 16 ve üzeri Node.js paketi olmalıdır.
- Android Studio olmalıdır.Android kurulumu yapılırken aşağıdaki 3 kurulumun olduğundan emin olamlıyız;

\* Android SDK

\*Android SDK Platform

\*Android Virtual Device

- npx create-expo-app Proje\_Name
- cd Proje\_Name
- npx expo start
- Daha sonra menüden çalıştırmak istediğin emülatöre göre press yap.

NOT : Android emülatörde çalıştırmak için önceden Android Stdio üzerinden Emülatör kurman gerek

- Android Studio - More Actions – Virtual Device Manager – Create Device – Herhangi bir cihazı kur

NOT : Android 34 ve üstü kurulu değilse onu da indir ve kur.(Cihazı seçtikten sonra gelen sayfada  Recommended kısmında) 












Styling

View Text Style Kullanımları

![metin, ekran görüntüsü, yazılım, multimedya yazılımı içeren bir resim

Açıklama otomatik olarak oluşturuldu](Aspose.Words.90a8b765-1ac0-40ac-a709-d918cc7cf522.002.png)

![metin, ekran görüntüsü, yazı tipi içeren bir resim

Açıklama otomatik olarak oluşturuldu](Aspose.Words.90a8b765-1ac0-40ac-a709-d918cc7cf522.003.png)

![metin, ekran görüntüsü, yazı tipi, dikdörtgen içeren bir resim

Açıklama otomatik olarak oluşturuldu](Aspose.Words.90a8b765-1ac0-40ac-a709-d918cc7cf522.004.png)



**Flex (Konumlandırma)**

![metin, ekran görüntüsü, yazı tipi, yazılım içeren bir resim

Açıklama otomatik olarak oluşturuldu](Aspose.Words.90a8b765-1ac0-40ac-a709-d918cc7cf522.005.png)

![ekran görüntüsü, dikdörtgen, bilgisayar, çerçeve içeren bir resim

Açıklama otomatik olarak oluşturuldu](Aspose.Words.90a8b765-1ac0-40ac-a709-d918cc7cf522.006.png)

**justfyContent and alignItems**

![metin, ekran görüntüsü, yazı tipi, meneviş mavisi içeren bir resim

Açıklama otomatik olarak oluşturuldu](Aspose.Words.90a8b765-1ac0-40ac-a709-d918cc7cf522.007.png)

![metin, ekran görüntüsü, yazı tipi içeren bir resim

Açıklama otomatik olarak oluşturuldu](Aspose.Words.90a8b765-1ac0-40ac-a709-d918cc7cf522.008.png)

![metin, ekran görüntüsü, yazılım, ekran, görüntüleme içeren bir resim

Açıklama otomatik olarak oluşturuldu](Aspose.Words.90a8b765-1ac0-40ac-a709-d918cc7cf522.009.png)

![metin, ekran görüntüsü, küçük alet, multimedya içeren bir resim

Açıklama otomatik olarak oluşturuldu](Aspose.Words.90a8b765-1ac0-40ac-a709-d918cc7cf522.010.png)


**Component**

- **ReactNative için component oluşturma snippetları.**

### **rnc**
import React, { Component } from 'react'

import { Text, View } from 'react-native'

export default class FileName extends Component {

`  `render() {

`    `return (

`      `<View>

`        `<Text> $2 </Text>

`      `</View>

`    `)

`  `}

}

### **rnf**
import React from 'react'

import { View, Text } from 'react-native'

export default function $1() {

`  `return (

`    `<View>

`      `<Text> $2 </Text>

`    `</View>

`  `)

}
###
### **rnfs**
import React from 'react'

import { StyleSheet, View, Text } from 'react-native'

export default function $1() {

`  `return (

`    `<View>

`      `<Text> $2 </Text>

`    `</View>

`  `)

}

const styles = StyleSheet.create({})
###
### **rnfe**
import React from 'react'

import { View, Text } from 'react-native'

const $1 = () => {

`  `return (

`    `<View>

`      `<Text> $2 </Text>

`    `</View>

`  `)

}

export default $1
###
###
### **rnfes**
import React from 'react'

import { StyleSheet, View, Text } from 'react-native'

const $1 = () => {

`  `return (

`    `<View>

`      `<Text> $2 </Text>

`    `</View>

`  `)

}

export default $1

const styles = StyleSheet.create({})
###
### **rncs**
import React, { Component } from 'react'

import { Text, StyleSheet, View } from 'react-native'

export default class FileName extends Component {

`  `render() {

`    `return (

`      `<View>

`        `<Text> $2 </Text>

`      `</View>

`    `)

`  `}

}

const styles = StyleSheet.create({})
###
### **rnce**
import React, { Component } from 'react'

import { Text, View } from 'react-native'

export class FileName extends Component {

`  `render() {

`    `return (

`      `<View>

`        `<Text> $2 </Text>

`      `</View>

`    `)

`  `}

}

export default $1
**






![metin, ekran görüntüsü, yazılım, ekran, görüntüleme içeren bir resim

Açıklama otomatik olarak oluşturuldu](Aspose.Words.90a8b765-1ac0-40ac-a709-d918cc7cf522.011.png)

![metin, ekran görüntüsü, yazılım, multimedya yazılımı içeren bir resim

Açıklama otomatik olarak oluşturuldu](Aspose.Words.90a8b765-1ac0-40ac-a709-d918cc7cf522.012.png)

- **Not : Birden fazla View veya Text tagini iç içe kullanabilmen için bir kapsayıcıya ihtiyaç duyarsın.**

![metin, ekran görüntüsü, yazı tipi, yazılım içeren bir resim

Açıklama otomatik olarak oluşturuldu](Aspose.Words.90a8b765-1ac0-40ac-a709-d918cc7cf522.013.png)

![metin, ekran görüntüsü, yazılım, multimedya yazılımı içeren bir resim

Açıklama otomatik olarak oluşturuldu](Aspose.Words.90a8b765-1ac0-40ac-a709-d918cc7cf522.014.png)











**Props**

![metin, multimedya yazılımı, yazılım, grafik yazılımı içeren bir resim

Açıklama otomatik olarak oluşturuldu](Aspose.Words.90a8b765-1ac0-40ac-a709-d918cc7cf522.015.png)

![metin, ekran görüntüsü, yazılım, multimedya yazılımı içeren bir resim

Açıklama otomatik olarak oluşturuldu](Aspose.Words.90a8b765-1ac0-40ac-a709-d918cc7cf522.016.png)

![metin, ekran görüntüsü, yazılım, multimedya yazılımı içeren bir resim

Açıklama otomatik olarak oluşturuldu](Aspose.Words.90a8b765-1ac0-40ac-a709-d918cc7cf522.017.png)

![metin, ekran görüntüsü, yazılım, multimedya yazılımı içeren bir resim

Açıklama otomatik olarak oluşturuldu](Aspose.Words.90a8b765-1ac0-40ac-a709-d918cc7cf522.018.png)

**Prop Types**

![metin, ekran görüntüsü, yazı tipi içeren bir resim

Açıklama otomatik olarak oluşturuldu](Aspose.Words.90a8b765-1ac0-40ac-a709-d918cc7cf522.019.png)

![ekran görüntüsü, metin içeren bir resim

Açıklama otomatik olarak oluşturuldu](Aspose.Words.90a8b765-1ac0-40ac-a709-d918cc7cf522.020.png)

![ekran görüntüsü içeren bir resim

Açıklama otomatik olarak oluşturuldu](Aspose.Words.90a8b765-1ac0-40ac-a709-d918cc7cf522.021.png)

![metin, ekran görüntüsü, yazılım, multimedya yazılımı içeren bir resim

Açıklama otomatik olarak oluşturuldu](Aspose.Words.90a8b765-1ac0-40ac-a709-d918cc7cf522.022.png)

![metin, ekran görüntüsü, multimedya, İletişim Cihazı içeren bir resim

Açıklama otomatik olarak oluşturuldu](Aspose.Words.90a8b765-1ac0-40ac-a709-d918cc7cf522.023.png)

**Default Prop**

![metin, ekran görüntüsü, yazı tipi içeren bir resim

Açıklama otomatik olarak oluşturuldu](Aspose.Words.90a8b765-1ac0-40ac-a709-d918cc7cf522.024.png)

- **isRequired zorunlu alan olmasını sağlar.**

![metin, yazı tipi, ekran görüntüsü içeren bir resim

Açıklama otomatik olarak oluşturuldu](Aspose.Words.90a8b765-1ac0-40ac-a709-d918cc7cf522.025.png)

- **Zorunlu alanların parametre almadığında hata vermemesi için defaultProps kullanılır.**

![metin, ekran görüntüsü, yazı tipi içeren bir resim

Açıklama otomatik olarak oluşturuldu](Aspose.Words.90a8b765-1ac0-40ac-a709-d918cc7cf522.026.png)

![metin, ekran görüntüsü, tasarım içeren bir resim

Açıklama otomatik olarak oluşturuldu](Aspose.Words.90a8b765-1ac0-40ac-a709-d918cc7cf522.027.png)

**Buton Componentleri**

![metin, ekran görüntüsü, yazı tipi, yazılım içeren bir resim

Açıklama otomatik olarak oluşturuldu](Aspose.Words.90a8b765-1ac0-40ac-a709-d918cc7cf522.028.png)

![metin, ekran görüntüsü, multimedya yazılımı, yazılım içeren bir resim

Açıklama otomatik olarak oluşturuldu](Aspose.Words.90a8b765-1ac0-40ac-a709-d918cc7cf522.029.png)

![metin, ekran görüntüsü, yazılım, multimedya yazılımı içeren bir resim

Açıklama otomatik olarak oluşturuldu](Aspose.Words.90a8b765-1ac0-40ac-a709-d918cc7cf522.030.png)


**Image Component**

![](Aspose.Words.90a8b765-1ac0-40ac-a709-d918cc7cf522.031.png)

![metin, ekran görüntüsü, yazılım, işletim sistemi içeren bir resim

Açıklama otomatik olarak oluşturuldu](Aspose.Words.90a8b765-1ac0-40ac-a709-d918cc7cf522.032.png)


**FlatList Componenti**

- **İtemları listelemek için kullanılır.**

![metin, ekran görüntüsü, yazılım içeren bir resim

Açıklama otomatik olarak oluşturuldu](Aspose.Words.90a8b765-1ac0-40ac-a709-d918cc7cf522.033.png)

![metin, ekran görüntüsü, yazılım içeren bir resim

Açıklama otomatik olarak oluşturuldu](Aspose.Words.90a8b765-1ac0-40ac-a709-d918cc7cf522.034.png)

![metin, ekran görüntüsü içeren bir resim

Açıklama otomatik olarak oluşturuldu](Aspose.Words.90a8b765-1ac0-40ac-a709-d918cc7cf522.035.png)

![metin, ekran görüntüsü, multimedya, küçük alet içeren bir resim

Açıklama otomatik olarak oluşturuldu](Aspose.Words.90a8b765-1ac0-40ac-a709-d918cc7cf522.036.png)

**ScrollView**

![metin, ekran görüntüsü, yazı tipi içeren bir resim

Açıklama otomatik olarak oluşturuldu](Aspose.Words.90a8b765-1ac0-40ac-a709-d918cc7cf522.037.png)

![metin, ekran görüntüsü, yazı tipi, yazılım içeren bir resim

Açıklama otomatik olarak oluşturuldu](Aspose.Words.90a8b765-1ac0-40ac-a709-d918cc7cf522.038.png)

![](Aspose.Words.90a8b765-1ac0-40ac-a709-d918cc7cf522.039.png)![](Aspose.Words.90a8b765-1ac0-40ac-a709-d918cc7cf522.040.png)







**State**

![metin, ekran görüntüsü, yazılım içeren bir resim

Açıklama otomatik olarak oluşturuldu](Aspose.Words.90a8b765-1ac0-40ac-a709-d918cc7cf522.041.png)![metin, ekran görüntüsü, multimedya, bilgisayar içeren bir resim

Açıklama otomatik olarak oluşturuldu](Aspose.Words.90a8b765-1ac0-40ac-a709-d918cc7cf522.042.png)

![metin, ekran görüntüsü, yazılım, multimedya yazılımı içeren bir resim

Açıklama otomatik olarak oluşturuldu](Aspose.Words.90a8b765-1ac0-40ac-a709-d918cc7cf522.043.png)![ekran görüntüsü, metin, bilgisayar, multimedya içeren bir resim

Açıklama otomatik olarak oluşturuldu](Aspose.Words.90a8b765-1ac0-40ac-a709-d918cc7cf522.044.png)

**Object State**

![metin, ekran görüntüsü, yazılım, multimedya yazılımı içeren bir resim

Açıklama otomatik olarak oluşturuldu](Aspose.Words.90a8b765-1ac0-40ac-a709-d918cc7cf522.045.png)

![metin, yazı tipi, ekran görüntüsü, çizgi içeren bir resim

Açıklama otomatik olarak oluşturuldu](Aspose.Words.90a8b765-1ac0-40ac-a709-d918cc7cf522.046.png)

- **Böyle de kullanılabilir.**

![metin, ekran görüntüsü, multimedya, yazılım içeren bir resim

Açıklama otomatik olarak oluşturuldu](Aspose.Words.90a8b765-1ac0-40ac-a709-d918cc7cf522.047.png)![metin, ekran görüntüsü, yazılım, bilgisayar içeren bir resim

Açıklama otomatik olarak oluşturuldu](Aspose.Words.90a8b765-1ac0-40ac-a709-d918cc7cf522.048.png)











![metin, ekran görüntüsü, yazılım, multimedya yazılımı içeren bir resim

Açıklama otomatik olarak oluşturuldu](Aspose.Words.90a8b765-1ac0-40ac-a709-d918cc7cf522.049.png)**Array State**








![metin, ekran görüntüsü, İletişim Cihazı, yazılım içeren bir resim

Açıklama otomatik olarak oluşturuldu](Aspose.Words.90a8b765-1ac0-40ac-a709-d918cc7cf522.050.png)

![metin, ekran görüntüsü, yazılım, multimedya yazılımı içeren bir resim

Açıklama otomatik olarak oluşturuldu](Aspose.Words.90a8b765-1ac0-40ac-a709-d918cc7cf522.051.png)





![](Aspose.Words.90a8b765-1ac0-40ac-a709-d918cc7cf522.052.png)



![metin, ekran görüntüsü, yazılım, işletim sistemi içeren bir resim

Açıklama otomatik olarak oluşturuldu](Aspose.Words.90a8b765-1ac0-40ac-a709-d918cc7cf522.053.png)**useEffect**




![metin, ekran görüntüsü, yazılım, multimedya yazılımı içeren bir resim

Açıklama otomatik olarak oluşturuldu](Aspose.Words.90a8b765-1ac0-40ac-a709-d918cc7cf522.054.png)![metin, ekran görüntüsü, yazı tipi, yazılım içeren bir resim

Açıklama otomatik olarak oluşturuldu](Aspose.Words.90a8b765-1ac0-40ac-a709-d918cc7cf522.055.png)![](Aspose.Words.90a8b765-1ac0-40ac-a709-d918cc7cf522.056.png)**

- *useEffect()* fonksiyonunu kullandığınızda React, DOM ile ilgili herhangi bir işlem tamamlandığında çağıracaktır. React, varsayılan olarak ilk render da dahil olmak üzere her render işleminden sonra effect fonksiyonunu çalıştırır.
- *Ayrıca tüm stateleri kapsayabileceği gibi sadece belirli stateleri de kapsayabilir.*

![](Aspose.Words.90a8b765-1ac0-40ac-a709-d918cc7cf522.057.png)

![metin, ekran görüntüsü, yazılım, ekran, görüntüleme içeren bir resim

Açıklama otomatik olarak oluşturuldu](Aspose.Words.90a8b765-1ac0-40ac-a709-d918cc7cf522.058.png)

- Yukarıda da setInterval (Zamanlayıcı) ve clearInterval ile bir state’in unmaunt edilme anı ve bu anda çalışacak bir yapı tasarlanmıştır.
- State unmaunt edildiğinde clerarInterval ile setIntervalde tanımlanmış yapı durdurulur. Bu sayede state unmaunt halinde arka planda çalışmaya devam etmez.

**

