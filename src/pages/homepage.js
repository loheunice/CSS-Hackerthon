 import { HStack, VStack } from "@chakra-ui/react";
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { Flex } from "@chakra-ui/react";
import { Avatar } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/react";


export function Homepage() {
  return (
    <VStack>
      <HStack>
        <Card maxW='md'>
          <CardHeader>
            <Flex spacing='4'>
              <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                <Avatar name='StareAtYou' src='zazu the cat.png' />

                <Box>
                  <Heading size='sm'>Chuen Rae</Heading>
                  <Text>Student suffering from academics, Griffles Institution</Text>
                </Box>
              </Flex>
            </Flex>
          </CardHeader>
          <CardBody>
            <Text>
              i dont like organic chemistry too many functional groups
            </Text>
          </CardBody>
          <Image
            objectFit='cover'
            src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAsJCQcJCQcJCQkJCwkJCQkJCQsJCwsMCwsLDA0QDBEODQ4MEhkSJRodJR0ZHxwpKRYlNzU2GioyPi0pMBk7IRP/2wBDAQcICAsJCxULCxUsHRkdLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCz/wAARCADrAdMDASIAAhEBAxEB/8QAHAABAAMBAQEBAQAAAAAAAAAAAAUGBwQDAQII/8QAVRAAAQQBAwIDBAQEDw0HBQAAAQACAwQFBhESITEHE0EUIlFhMkJxgRV1kaEWFyMkMzdSU1VicoKxsvA0NTZDdJKTlLO00dPhJXOio8HE0iZUg8LD/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/xAAVEQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEQMRAD8A1xERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQCvGCzUsiQ1p4JmxSPhkMEjJGslZ0cxxYTs4eoXsq5pPG5DGV85HdhEL7WoMrehaHxv5V53tMbz5ZIG+x6ILGiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICi8NmYM1HkZYYZYm0slcxjhLx3e+sWgvbxPY7qUUVhcNBhYshFDNLMLuSuZN7pgwFslkgljeAHToglUREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAVc0nk7+Ur5yS5M2V1XP5ShAWsYzjXgc0RtIYBv3KsZ3XPViowtmbTirxtdPI+YVmxtaZ3dXueI/rfHdB0IiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIg+OIa1znODWtBc5xIAaB1JJPRZudRax1deuVNJGChiqjvLmyllnJ0hO5HAPaSCR1aA3cDu4b7Cz62sS1dK6hliJDnVmwbg7ENsSsgd+ZxXN4fVYq2k8KWAB1pk1yYju+SWVx3P2DiPuQQs+C8U8ZG+7S1QclJE0vdUmg281o6lsbZS5pPwG7ftVg0lqaHUtGWR8bYMhUe2G/Awu4tcd+MsfLrxdsdgeo2IO+27rKuGnisRj5bU1KjVgmtvMlqWKJrZJnOcXkveBuepP5UVVtSaryUGQi05pys21m5Wh0z5AHRVGlvMAg9OQGzjv0AI+kXbDkGmfE6Vvny6zEdo+8YYoXmuD8OTeI/8AKXJ4bAX8rrbNTAGzNajia71a2aSWw8f1R/NWmoM+xGqdQYvLw6f1hFGJ7JayjkIQ1sUxe4hvLiAwtcfdBDQQSAR13F2yF+ni6VvIXH8K1WPzJXAcieoaGtHqSdgB8SqV4qVY5MBVuDYT0r8flPH0g2ZjmuA+0hh/mqN8QsjYtaT0kN9jlzTszkdNyaof1+W7wfuQe1W74kaz528dZiwODL3NryFnOxO1p23Y4bvdt6kFjfQb7Er1t0vFLTkUl+tmos3WgBksV7MBEpjb1Jawkv2+PGUH5H1v9OtDSq06cLQ2GrBFXiaOwZG0MA/MvdBCaa1DS1Jjm3qzTHIx5gt13uDnwTAA8d9gCCCCCBsd/iNhBY3M5mfxB1BiJbcj8bWovlgrFkXCN4bU94OawP8ArO7n6yjNJNGO17rTFQe7Ulimstjb0a0smjewD+SJXD8nwUZZzX4B8Q9TXfYLV9z4PZmw0wTI3nFUk5kBrjsNtvvQa8qPdzOZj8Q8Lh47b24yakZJaobFxe/2ey8OLuPPu0H6XouY+JM3X/6Uzn+jk/5Sg6GXdnPEbT151G1RPs00PkXGlsp4VbJ59QOh3+HoiNeREQFWdH0L9CtnmXKz4HWNRZa5A2TiS+CZ7SyT3Se+xVmUdicvSzEd6WoyZrad+1jZvPY1pM1cgOLeLj7vXogkUREHx2/F23fY7fb96o/hzmcxmaGXlyduSzLBfbFE57Ym8YzBG/b9TaPXf8qvDvou+w9u/ZYnorVR09SyNdmGyOQ9ouCw6Sm1xZH+pMj4O2YevTf70VtqoukMxmclndb1b1uSetQtNjqRuZE1sLDZss2BY0E9Ggdfgub9MqU7D9Cmd7/vb/8AlLj8NpzazeubPlyRe0y1rBik+lEZZ7T+D9wOo32+5BP6r1ZNhpaeIxFX23PX+PkQ8XOZCxx2D5ACNydiQOQ2AJJAHvRkenPFG4wWLurhUsv2f7PVi5xR9Pokx+W3cfDiR8z3XPphov8AiHra/Ps+Sj59avv9TaYVQ5v82Pb+ctKQZzX1NqrTOSq4zWDYZ6Ntwjq5WuAGg7hu7+LRuBuOQLARvv7w6rQZ54KteezYkbHBXifNNI7fiyNjeTnH7FV/ESpBa0rknyNBfTkrWoSR2f5rYTt9rXOH3qt5zK2X+F+Fmc53O5HQpzH6z2Q8iev8byx+VB7R5jXms57LtOvjw+EhkdCLlhrTPMW7b7HZx5dtw3YDtyJ79E2G8U8Qx1ujqNuW8tvmS1LMID5AOpbEJS/c/D32q2aZpxUdP6frRNAazHVXO27OlkjEsjvvcSfvUugrelNUV9S05iYvZ8hTLYr1Xd2zXO32kj5bO4nY7b7EEEHsC7w1Zqt+CNLH4+t7ZnMiWCpXIJjY1zjGJHgEE7kENG47EkgN61+qBjPFS3BXHGLK05pJmjsXPrtsl3+c0n+cmLaMj4o56xN1/BlOZtYH6pY2Cr0+5z/85B0s094o3mize1aylO9od7NShLo4yRtwJjLBuOx2B+0918x2pNTYHNVcDq10NiK7wZRyULQ1ri48W8uIaC0nZp3aCCR3Dt1ofxXFdxOIyMlOW/SrWn03PfWNmNsnlOfx3c0O6fVb+RB3f9UXwei+ogiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiCK1Fjn5bB5jHR/stmq8QDcAGdm0kYJPT6QCrXhrl69rCMxD3Bl/EPmhkgk92UwOkc5r+LuvTctd8C3r3G96O+3xVPzmhMVlrhylO3axeTceT7FIjjI7t5j2dPePqQ4fPdBbJ5oK8M088rIoYWOklkkcGsYxo3LnE9FUdI6my2pLuoHmCuzDU5zFRmbHKyd7nOJax+7y07NALvdH0x98W3Qd3K+UcnrTI5Sgx52ihJ4lzOhPmPmlZyB+DN/sPUXnHY3HYinBQx9dsFWBpDGN3PUncvcXdST3JJ3RWe6bnh0nq7UeDvkQ1srKyzjppXbMd78jomlx6e8HFv8AKj29Vpyhc9pvDajgbDkIT5ke/s9iE8LEBPU8HbHofUEEKst0HqKIezV9cZiKkBxbFwlLmM7cA5k7W/8Ah+5ByeI2QGUkxOkscWzX7dyKSw2M8jD7jmsY/j2Ozi9w9A0H6y79fYF82lajabHPkwXkSMDRu41o4vIeQ3+KOLj8mlTGntHYLTr3z1xLYvyNLZbltwfNxcdy1gADWg+uw+9WQgEEEbgjYg9iEENpvOUtQYupdgkaZfLjjuxA7vgsBoLmuHwPdp9QQVI3btPH1bN27MyGrXjdJLI87ANHoB3JPYAdSTt6qoX/AA9outvv4LJ3cJaeSXikeUB3PJ3Fgc1wBPUgP2+S8GeHctyaKTUOpMplYojuyu4uii69wS+SR2x9duKDl0BFYymb1XquWJ8UNyaWpSa478g6USSdfXiGxt37b8gOy+4f9tPVH4ul/q0FoNarVpV4KtSGOCtAxscMUY2Yxo9AAoSnpiKrqfJ6lFyV8l6u6uaxjYI4wRCNw8dT9D8/5QsSzfIftraf/F5/3a2tIVdn0vFPqmlqY3JRJVgMDaojZ5bgYpYuRfvy+vv9yIsSIiAojA4UYSHJQiybHt2UvZMuMYj4Gy4O8vYOO+23dS6gNMZW9l4M1Lb8repnsnj4PKYWAQV3NDA7cnc9Sgn0REHx30XfYf6FnPhN/evPfjRn+7RLRnAkEfEEflVe0rpiHS9a7WjuSWvarIsufJGyMtIjbHx2YfkgsSzbQP8AhL4j/wCWt/3u4tIVdwOmIsHkNQZBtySd2YmEz2PjYxsO0ssvFpb3+nt935AqTJ49JeIOSkvHy8bqON74rDxsxssj2yAuI/cv5tPye0+q05pBDSCCHDcEHcEbdNiFHZnCYnPVDTyUHmxgl8T2njNA/tzieOoP9uvZVBmgM7Uaa+M1rl6tIE8IeEjiwH4OinY37dmhFfrxIzMUeNZp6ptPlMrPVjFeP3ntjErXsBAPd7g0NHqNz6dejN6YldoOHCwN823jKdWdjWDczTQDlK1g77uBfx+ZXdgNEYTCT+3ufPfyh5H2y84OcwvGzjEwdAT6nqep67FWk9igquhs7UzGDx8LZGe3Y+vFUuQ8hzHlNEbZQO/FwAI+BO3orPNNBXilnnljihiYZJZZXBjGMb1LnOd0AVQy2gcXeuOyWLuW8NkXOL3zY87RvcT1cYwQQT68Xt+YJ6riPh7fvOibnNWZfIVo38xXAdE0kepMssv9A+49QHDpgnUmt87qaJjhjqMTqlR5aRzkdGyBgG/8UOcfhzHxS9KzTHiKzI2j5WNztV0b5j9CNzmxscXb/uXsaXH0EnyWhY7G47E1YKOPrsr1YQRHHHvt17lzju4k9ySSfmvDM4TFZ6m6lkYfMj5c43NcWSwyAEB8bx1B/p7HcHZBINLXNa5pBa4NLS07gg9QQR6Km6s1XexWRwuHwsdS1lbkzWzxWBI9sbJNmRteInAgncv+xp/ddY5uhsrScyhj9dZGpDIHugqHfzRGN9zE2Kdn37MCndOaKw2n5n3RJNeycgc03bnHmwPHveU0dBv13O5PU9djsiLQPTfv67dvn819REBERAREQEREBERAREQEREBERAREQEREBERAREQEREBfD2d9hX1fD2d9hQUvwyAGla+2393ZD/bFXVUrwy/wVg/y7If7Yq6oCIiAiIgIiICIiAiIgIiIBXNUo0aDZmU60UDZ55LUzYm8Q+eTq97tvU9F0qr6Mq3atXUDbUE8Bm1JmLMDbDHMc+CR7Sx7Q70PXZBaEREBERAREQEREBERAREQEREFHygH6ZOjvxNkv6s6vCo+U/bJ0d+Jsl/VnV4QEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBfD2d9hX1Qua1NpvBNDcpdjjke3k2uwOkne09N/LZuQPmdgghPDL/AAVg/wAuyH+2Kuqz7C678N6MceOoCxj6vmPcwSwP8kOedy4lj3uAP2dPkB0vsM0FiOKeCWOWGVofHJE4Pje09d2uadkHoiIgIiICIiAiIgIiICIiAuDG5Whlm3JKb3ubTu2cfNzY5hE9cgPADu46jqu87qF09h5cLBlYpJ2TOu5fIZMFjHMDG2XNdwPIncjbugmkREBERAREQEREBERAREQEReNmzVpwTWbc8UFeBvOWWZ4ZGxvbq49PggpuU/bJ0d+Jsl/VmV4WeXddeGrcpXyBbYs36Ub60FyCu/aON4cHMb5r2dOruvH1VswuosDn2PfjLjJXRgOlhcHRzxg9AXRvAO3zG4QS6IiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiCPzWRZicTlMk4B3sdWWZjSCQ+QDZjDt16nYfeqPoLT9bIwS6qzTG38hkbM767rQbKyKON5jMjWEceTiDt06ANA2262PXMUkuk9QNYCXNghmIHfjDPHK78wK/Og5I5NJae4EHy68kD9uu0kUz2O/OEVL5HEYjK1Zad6pDLC9pZ1Y0Pj/jRvA3BHpsoHRWD1Bp+HKUL9itNj/anS4wRySOmYC5weXNLA0Nd7rgAehLvircVx18li7Vi1UrXq01qo5zLMEUrHTQuaeJEkYPIdUR2IonE5eXJzZqJ2Pt1GY68+kx9oFvtXAb+ZG0gENI2I+1fcdnMflLuco1RP5uHsNq23vjDYXSu5e7E4OJO2x5dB+dBKouCtlsVbvZHG17Afdx3lG7EGSDyfNG7AXloYd/k4r2Zex8luegy1XddgjbLNWbIwzxxu22c+PfkAdxt09UHSig8ZqXGZTK5rEVo7Ys4lzmWXzRxthcWyOhPllrye4PdoU4gIoSLUmMl1DY022O17fBB7Q55jj9m4cGSbBweX77OH1B/xm0BERAREQFBaby9vMQZeWzHDG6lmsjjIxCHgOirOAa53Mnqd+qnVx0Mbj8Y2zHSgELLNqa7MA6R3OxMQZJDzJ77BB2IiICIiAiIgIoTB6lxefny9elHbY/FzMgsmzGxjXOc6RoMZY9249x3wU2gIoOjqXF5DN5XAwR2hcxrHSTvljjEDg17GHy3B5d3cO7QpKC9j7ctyCtagmmpSCK3HDI1zoJDvsyQN7HofyIOpFHw5bGWMjfxMUxdfoRwy2oTHK3y2Sjk1wc9oafTsT3XiM5R/DrtPPjsMumh+EGPe1gryxcwwtjcHci4dd92jsglT2KzLUPnas1pR0uZZGYnFsNu+2FxaZJGxtkc4kevvsjHw3cfrK7zZS3FnMfiW42xJWt1J7MmQYXGGu+Mu2jlHDYb9Nvf+t2VMwX618TtVwzdH2qc7od/UONax7v3f0IL7UxmKoQMrU6VavXY3gI4YWNbx+Lvjv6k9T6qo5PR96HUGIzemBTpObI45KJ7nQwPbyby4sia76beQcOIG4Du/VXvquS7kcXjhA6/crVWzyeTC61KyJr5OJdxBeQN+n9t0HUN+nzX1fAQQCCCD1BHYg9QQV9QEREBERAREQEREBERAREQERVWvqa1LrK/pk1YBBWqe0NsB7zK4+TBLsQen1yPuQWpEVWv6mt1NW4XTjakT4L9fzn2HPf5rSWWHbNb9Hb3Pj6oLSiId9kBFV9Sawx2n3wVGwy3srY4+RRrdHnn0aZDsdt/QbEn7OohzqDxZ4GyNI1BX6O8ozNNnj3I4+0ct/8A8f3INARVnTOraGoxYgMMlPJ1QfaqUx3LWghpexxAJG/QgtBB6EDcF35z+qJ8ZbjxGKxVvJ5uxALEMLWOZWjhc50fnSyu2GwI+P8AOCCw2rVSnBLZtzxQV4m8pJZntYxo+0/mVJl1bndQSy0tFUS+JrnRzZvIMdHSh9N4WPBLj69QT/F26j91tG5HMTxZHWt83pGnnBi6pfHjaxPXYhuxcR036Dt1LgrrBDBXjjgrxRwwxNDI4oWNZGxo+q1rQAB9yCGwuBlx9HIVclkreWkyTpH333HfqbvMj8pzYWDctaR025fk7Ck05dSeHdi7Ulx1nJ6cnsGxBYqgufAXANJfxBAcQByaQBuNwevXVEQZza8S4rcbq2ncNlreSlBbEJ64DInHs4thc4nb7QPmpTQ2mr2GgvZHKu55jLSCa0C4PdAzdzxGXjoXEuLn7dN/jx3PTrXPZLTuLq3qEVeR8mQhrStsNe4eW5kkh4cHN948dvvU/Qu18jTpXqzuVe3BFYid03LZG8tiBv1HY9e4+SK6j29FFYbB4/BsyDahmd7demyE77DxI8yyhoIDth06dFKoiKno3F5Ol+iW/lK5gyGXzNmzJGXMdtAzpGA5hLduriPtC4tDA5G/rXUbtyMhlnU6jnd/Zag2bt8uoH81XhzQ5rmuALXAtcD2IPQhcmPx+OxdVlPH12V60bpHMij5cWmR5kdtv17n+2yCg6PcxmtvEVznNaPaJhu4gbn22b4rRfPrfv0X+e3/AIrIcbpvFam1hrmvkXWWx1btqaP2WRsZ5vtyMPLdrvgrN+lVo399y3+tM/5SK46Ra7xXy7muDgcYerSCP7lp/ArSVlGncVTwniPcxlIymrWxcoiMzg+T9Uhqyu5OAHqT6LV0QREQEREBVfRvt3s2oDbFrkdSZgwG2JQ4wc28CzzPq99tuitC46ORx+SbZfSnEza1qalOQ17eFiHYPjPMDt07IOxERAREQEREGaeHD448lr8ve1vLI1w3mQ3faW32Dlo3n1v36L/SM/4rHdL6Vw+p8lrAZJ9xoo32iD2WVkW/nTWefIFrj9VqtX6VWjf33Lf60z/lori0wWnxG1yQQQa053BBH90QfBSNb/snxFyVf6MGpMVDcjA7G1V3YR94a8/eoTRFGvjNc6tx9bn5FOjLBD5jg5/FtiE+8Rt16/BaPNjMZYvUcjPWjku0mysqTO35RNlGzuPXbr9iCAs4vKQ65xmZp1y6haxE1HLSc42tjLHF8buLnciSeA6DsFMzYXHWMxjs3I2X26hXnrVy17mx8JgQebR37nbf4/LpJoiB32P/AKKi6xwGYdfx2qNOs5ZXHgNnhG29iFvIAtbuASAXNcN9yDsOrRvelV9a6jk05h3WKxjN+xK2Gm2RvNgLffke5oI90NB9e5CCDi8T8bFGI8phsxVvsBbLBHAHN5/xfOdG/wD8O4+fdcMdPPeIGYx+QyVCbH6cxzhLBDYDmvte82TYcgCeZADnAAADYbnqdExNixbxmItWgwWbNCpYnEY2a2SWJr3ho3PQE7d13Iqtahx+rpZqeQ09lWwy043MdjbLW+x2wXciXnvy22A3+4t6l3JitcU5LDcXqGtJhMwNgYrZ2rTHsHQzO6bH03+wF2/W4KPyuGw+aruq5KnFYiPVvMbSRn91G8e8D9h/MiJAfEev50VAOK1rpEh2CmfmsGw7vxlx368rx79W1pAOo+wfzT3VjwOpMZqGvZkqtsQz1C2O9WtxOjmrSuBPFxPu+h9fTsOyCcRUK3ry3cuT47SWGly80BAntOdwqM3JAIO4BB2OxL277HYEdVzzav17huNjUWl4248lrZJsfKHGLkQNyWyyN+QBLdydt+qDRUXFjMjQy1OrkKMolrWG8mOHQtIJDmuHo4HcEfL5KC0pqe1qGzqOCapDXbibMUEZie95lD3TN3dyHpw/OgtSIqridT2sjqjUOBfVhjhxcT3xzNe8ySlsjI/eB6eqC1IiICIiAVlkuSxmI8Tc5dyVhtesKMcHmOa9w5vqU+LdowT1AJ7LUysv9ix+R8Uc1Wv1a9qv+D2yCKzG2SPzG1aYDuLtxuOyLFq/R5oX+GYf9Db/AOWqfPlcVmPEjSlvG2G2K7a/kOka2Rg81sNxzhtI0HsWq+foU0d/AGH/ANSr/wDxVHvUcdjvErSlehUr1YDWEhirRMjYXmK4OXFo23+5BqSKpXMVqPOZq9Fdt38bp6nDC2izGWmwz5CaQbvkmkiJeA0jYNO3ofjv4YCxkMdqjMaYfftZGhXxsGRry3H+bZqOe5kfs8svc7g8m7+n2oiF0BGM1ntWamttD5xY8ioXe8IRNyc4MJ6jZnlsHy3+K01Zr4buGOyWsMBP7tmC2Jo2n/GMhLq73N+X0D9jwtK/t0QV/wDQrihqNupWS2orvl8HQxPjZWlc6MwufK0M3JI2397u0FWD17en9gq9a1Tj6moaGmxBZmuW4mO51vKcyBzg9/GVrnBwAa3keh6EKwjdB9REQEREFM8SYfM0vYf/APb3aMx9O8nlf/sofwuzXmV7uBmd79Qm7R5Hqa8rtpWD+S7r/P8AkrPrmPzdJ6hb+5rxy/Z5M8cu/wCZYhhcpNhcrjspCD+tZg6Vg7yV3+5LHt8SN9vnsiv6TRecM0NiKGeF7XwzRsmie36L43tDmuHyII2XoiCIiDP9JUMlX1hr2zYpWoa1meU1ppoJWQzA25X7xSOHE9CD0PqtAO6Igz+pRyI8TcrfNK22k/HmNlp1eUVXu9mqt2bNtx33Dh39FoCIgIiICIiAoLTWHt4aDLxWZIZH3c1kcmwwF5DY7LmlrXcwOvTqp1QunszLmoctLLAyE0sxkMYwRvLg9lZzWh53Hc7oJpERAREQEREGfeHtHJU8hrmS3Rt1o7N6u+u6zBLC2YCW04mLzGjcAFv5VoKIgz7TlDJw6/1ncmpW4qk8EzYbEsEjIJSZ4S3y5HDY9j2PotBREBERAWDeIWZOXzVyKJ+9TFsloVxv0dKD+ryd/V2zR8mD4rWtW5n8BYK/cY4CzIBUpddj7TMCA4fyRu/+asCqwunt46v1Jnu04ST1JL52M6or+lakXkVacG37DBDF9nBgavdERBERAVR1/c/Bmmcs+ACOW/JDTkfHs1xEuweXEepYC371blUPEalJc0tkCwEmpLXuvABJMUbuD+g+AcSfsQdmi8XBitOYaONgEtqtFftu2Ac+xZY2V3L+TuGj5NHwU9PBBZgnrzxskgnifDNHIN2Pje0tc1w+BCh9JXoshpzATxuBc2jBWmG+5bNXYIZGnb5g/wBipt7mMY973NYxjS57nkBrWtG5JJ6bBBC6c07S01Ump07N2eOec2XG49jy2QtDTw4MbtvsN/n9qoGis7g8JkNanK3Y63tWRYYObJnmTy5bPM/qbXDpyAV703qijqZmQkqVbcLKUzYHSWGs8uXmC5pjcxx67bFwIG3IfFUjQeKw+UyOtzkqFS4YMhGITbgjm8vnLZLuPMHvsD9yKuH6PNC/wzF/oLZ//kqto21Wu6+1lbqyCWtZqTSxSNDgHsNmIAgOAPxV1/Qpo7+AMP8A6lX/APiqVpOKGrr/AFvDWgYyKCpO2GCENjY0CxEQxgGzQEGoIqRR05qHLRTZDUOYzNDJzyzOr0sVeENbHRBxEbWiEljj2JJJ9PtPdofLZDLYid96UWJ6ORt40W2tDRcjg48Z9m9Ou+x2+CItKIiAqbV09mI9eZPUMja4x09PyIiJSZi7yK8fWPj06sd6/wDW5IgKmZHT2Yta4wWeiFf8HUarYpi6UibkGWR7rOPb3x6q5oUEbZNDLxZLGQ5F7JYnRR3DjLQjt1nFweGOfGS5pdsQe3TdVHFVn6S1ZUwcEzrWP1HXtXPNtMjdfitVmueTJYY0Oc0gHbcd3dNuvOWv6cyTMtYzen8nHj7tyJkWRgsVhYp2/L6Nkc3drg8fEfm3PL0xGnLdfJyZzNZE5LMOgNWB7YRBVp1ydzHXiBPU9dz8/nu4ri1NpC1kb0GdwV0UM5AG8nkuEVgNbwHJzASHbe7vxduAARsFwOn8bHR+zClhA4+77bzj5dtuXAvLf/K+4dloSIin6U0fJhrFrL5a37fnbjSJZiXOjga/YvbGX+8XHpycQOgAAA+ncERAREQEREEfm6cuRw+ZoxBnnW6FqvD5juLPNfG5rORAPTfbfosyh8NIKjY5tQ6ip1Inbgx1vLiYem5DbFsgfH/FrQNVZ2PTuGt5Eta+bdsFSN5Ia+xJvty49dmgFx+TT8VUsFoduajhzurp7V69fY2wys6aSKOGF43YH+UQd9tjsC0Dtt03RVxwBwNajUxmKycN2KlGY2/ryGzOG7k++Yz6dh0G23yUwqJlPDfBOiM+BM+LyUAMlV8Nid0bpG9Q083lzd+27XDbffr2PVoXUNzMVLtHJ7/hbDyCvac4AOmZu5jXvH7sFrmv6d27/W2AWxtmo6d9ZtiB1iNodJC2VhlY09i5gPIL2KzfDAfpo6qOw3/B0g/NSWkIjxNmo2dlY2IRZeC5kJkZ5zhsTuGb8tuh9PReyza4B+mxhDsN/wAHv6+v9x2lpKAiIgIiICIiAuDGYqhiWW4qTHtZbuWL8/OR8hM85Be4FxOw6Dou9VjRtq9aq6gfbnsTGLUmXggdYe9xbXje0MYzn9UddkFnREQEREBERAQovxN+xTf92/8AqlB+ILNSyHPrTwTNa7i50ErJGh22+xLCevUflXss58JQBhs1sAP+1f8A2sC0ZB4xWak75WQ2IZXxHjK2KRj3RncjZ4aSR2Pdex3WbeHgAzviNs0D9fxb7ev65uL9amyGZ1FqBmjcLZNWCJhlzFuMnkGBoc5pDHA8Rya3bccnP2OwadwltU0NH5/2avkdQQ056RlELIshTjLXycQTJFKTuenT71WqfhtfqZTB5CnlaV7H18hStyFzXRSmKGVshLDGXxk9PiFY6/hvoeGBsUlGazLx2dPPZsCVxI78YXMYPls0D/1rmSo5Hw6u1MribFibT9qcQ3aMz+YY527tvmSA4sdtv02JO/UrVR3/AC/8F9XlXnhswwWIXB0M8Uc0Lh9Zj28mn8i9UQREQF+JY45Y5YpWNfFIx0cjHgFr2OHEtIPTY9l+0QZudK6z0zasz6Qu15sfYk8x2PyDtgzr23f7p2GwDuTTt0PLbdLeO8WtRsdRyLsXiMfIQLJqv8x0se/VvFjnuI+LTI0HsenQ6QiCLwWFx+Ax8GOpNd5URc+SSQgyzTO2L5ZCBtuen5APRQGi9O5jB3NVTZAVwzJW4Z6vkSmQ8WvsOPLdo2+k1XNEBUrD4DK43V2qs9cNVmOvQTiF/ne+0ebHJykaWgAANO53V1Xx7Wua5rmhzXAtc0jcFp6EEIIHKYvGarp1i3KXhReycMfiLoZBZDy1h8wtDmPALdmg/NRmiLVqM5/Ttj2d36GrcdOvPWhZAyavKHvaXxx+7zGx5H13+O5d8r6Y1Ph2z09PZ+Cti5JZJYK96i2zJSMpLnNgfyAI36gEf09ZnT2BrYGtPGyaW1buTvt5C7Z6z27D+73fAfAbn8pJJU0iIiCIiAiIgIiICIiAiIgIiICIhQZr4slxo6dYf2F9+Xzfh+xgf0Fy0hoaGtDduIADdu2wHTZV7WOCfqHB26UPH2uNzLVPkQAZ4w5vEk9PeBc3r8fkoPTOuMe2vFitRSHHZbHtbVmNwPY2byxxDnOcOjv3W/TfqCeXulX9ZnpvZviTrRkP7E6tadJt25+fWcfzlync3r/S+LrTOq3a9+6QW14Kj/NY6QjpzezdoHx67/euTQGEyVSPKZzLsczKZyXznRyNDZYoOTpP1Rvo55JcR8Nt+o2AVuaPU03iFqePTtmrWv8Akcny2wDGa4ZVDmAGOTrvwP0VPfg/xr/hzB9j/i2d/wDUlz4b9tHVX4uk/oorSEGR4+LUMPiRgmZ+zWs5AVLBMtUAReUadjgwARx/P6i1xZtd/bXwn4uf/udlaSiCIiAiIgIiIC56l2jeFh9SxFO2vYlqTmJwcGTxbB8btvUdF0Kv6XxV/E181Hc8rlczuTyMIieXjyLDmlnLcDr0KCwIiICIiAiIgL8S7eVNuQB5b9z8Bseq/a/Ev7FN/wB2/wDoKDGNEV9fT4+8dN38fUqsu8bDLgY57rHkRkubvXk6bcR39Fahj/Gr+HMH/o4zt8+lNePhN/ebNfjX/wBrAtGRWZeGYsNymuW2nMfZbZqtsPZtxdMJbXmObsB0J3PZfvRI5a08Q3yfswnma3f0Ybsxd/Q1frw9/v54i/jCP/ebi89QRX9Iao/RZVgfPicgzyctHEDvEXcQ4n0G5DXtPx3b05bkNMVU8QWxnSWb5gdDRLN/R/tcQ6fnXVW1no21XFhmZpxtLQ4ssSCGZu4328uQB35AR8z60zUOZl11aq6a04JJKTJ4rGSvuY9sTWt3Ad72xDW9SN9i5wGw2G7iLnop0jtKaZMm/L8Hwgb9+I3DfzbKwrnp1YKNWnSrt4wVIIq0LT3EcTAxo3+wdf8AquhAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBRmSwOn8vxOSxtS05o4tfNE0ygd9myDZwH3qTRBDY/S2lMXIJ6GIpwzt6tl8vnKz+S+Qlw+4qYX1EHFFisTDenyUVKszIWGGOa0yNomkaeO4c8dT9Fv5F2oiDidisS7IR5V1KsclGzy47ZjaZ2s4Oj2D++2xI+9dqIgIiICIiAiIgKHwOZGbiycwr+R7Dlb2M2MnmeZ7MWt8zfi3blv269lMKOxOIp4eO9FVdM5ty/ayMxnc1x86wQXhvFo6dBsgkUREBERAREQF8cA4Oa4AtcCCD2IPQgr6iDix+LxWKjkhxtKvUikk817K8YY1z+IbyPH5AD7l2oiDipYrE4+W3NRo1a8txwfafBG1jpnAucHPLe53c4/euxzWva5rgHNcC1zXAEOB6EEHovqIK7NonRE8pmkwVEPJBPlsMbCe/WOMhn5lM06OPx8La9CpXqwA7+XWiZEzf47MA6rpRAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQFWdH372Qragkt2HzmDUeWqQOfx9yvE9oYxvEDoN1ZiuerNQmbMactaRsc8kUxrOjc1s7T77X+X9Yeu6DoREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBVzSeMyGLr5uO7EIn2s/lb0DQ9j+UE72ljvcPTseisaICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiIP//Z'
            alt='Enantiomers'
          />

          <CardFooter
            justify='space-between'
            flexWrap='wrap'
            sx={{
              '& > button': {
                minW: '136px',
              },
            }}
          >
          </CardFooter>
        </Card>


        <Card maxW='md'>
          <CardHeader>
            <Flex spacing='4'>
              <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                <Avatar name='Segun Adebayo' src='https://i.pinimg.com/originals/9f/fd/55/9ffd55b9fa78e4673c8190dce45d4a67.png' />

                <Box>
                  <Heading size='sm'>Eunice Loh</Heading>
                  <Text>A Hungry Student From Raffles Institution</Text>
                </Box>
              </Flex>
            </Flex>
          </CardHeader>
          <CardBody>
            <Text>
              Have you ever been to the rumoured Professor Brawn Cafe in Raffles Institution?
              As a poor JAE who had been lured to raffles for its amazing food options, I am saddened to have never tried any food from Brawn Cafe.
              Hopefully it'll be opened before I leave this school ☹️

            </Text>
          </CardBody>
          <Image
            objectFit='cover'
            src='https://www.professorbrawn.sg/images/article-images/article-img-menu.jpg'
            alt='FOOD'
          />

          <CardFooter
            justify='space-between'
            flexWrap='wrap'
            sx={{
              '& > button': {
                minW: '136px',
              },
            }}
          >
          </CardFooter>
        </Card>
        


        <Card maxW='md'>
          <CardHeader>
            <Flex spacing='4'>
              <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                <Avatar name='Sanjana' src='https://bit.ly/sage-adebayo' />

                <Box>
                  <Heading size='sm'>Sanjana</Heading>
                  <Text>Creator, Chakra UI</Text>
                </Box>
              </Flex>
            </Flex>
          </CardHeader>
          <CardBody>
            <Text>
              With Chakra UI, I wanted to sync the speed of development with the speed
              of design. I wanted the developer to be just as excited as the designer to
              create a screen.
            </Text>
          </CardBody>
          <Image
            objectFit='cover'
            src='https://alizila.oss-us-west-1.aliyuncs.com/uploads/2022/07/Sanrio-Characters.png'
            alt='Chakra UI'
          />

          <CardFooter
            justify='space-between'
            flexWrap='wrap'
            sx={{
              '& > button': {
                minW: '136px',
              },
            }}
          >
          </CardFooter>
        </Card>
      </HStack>
    </VStack>
  )
}