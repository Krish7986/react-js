import ProductCard from "./ProdutCard"
import "./index.css"
import audio from "../vedio/Armani.mp4"
const products = [
  {
    imag1: "https://th.bing.com/th/id/OIP.xaqdiWtJJpuv-Hx0f-RK8QHaJ4?w=208&h=277&c=7&r=0&o=7&cb=ucfimg2&dpr=1.3&pid=1.7&rm=3&ucfimg=1",
    imag2:"https://tse4.mm.bing.net/th/id/OIP.5DqmxtEItCOat7E5qxxocgHaHa?cb=ucfimg2&ucfimg=1&w=750&h=750&rs=1&pid=ImgDetMain&o=7&rm=3",
    price: `59,999`,
    title: "Mens Casual"
  },
  {
    imag1:"https://th.bing.com/th/id/OIP.iHxwDopJKW_zqnhk4tcPWAHaJZ?w=208&h=265&c=7&r=0&o=7&cb=ucfimg2&dpr=1.3&pid=1.7&rm=3&ucfimg=1",
    imag2:"https://tse4.mm.bing.net/th/id/OIP.5DqmxtEItCOat7E5qxxocgHaHa?cb=ucfimg2&ucfimg=1&w=750&h=750&rs=1&pid=ImgDetMain&o=7&rm=3",
    price: `32,299`,
    title: "Armani casual t-shirt"
  },
  {
    imag1: "https://th.bing.com/th/id/OIP.Udc6oLbD1sd4-qNaIMt-UAHaJL?w=140&h=180&c=7&r=0&o=7&cb=ucfimg2&dpr=1.3&pid=1.7&rm=3&ucfimg=1",
    imag2:"https://tse4.mm.bing.net/th/id/OIP.5DqmxtEItCOat7E5qxxocgHaHa?cb=ucfimg2&ucfimg=1&w=750&h=750&rs=1&pid=ImgDetMain&o=7&rm=3",
    price: 5999,
    title: "Rare Rabit Shirt"
  },
  {
    imag1: "https://cdn.shopify.com/s/files/1/0752/6435/files/IMG_0533_7b3164e7-051d-4ac2-af08-483e146ba525_900x.jpg?v=1743582983",
    imag2:"https://tse4.mm.bing.net/th/id/OIP.5DqmxtEItCOat7E5qxxocgHaHa?cb=ucfimg2&ucfimg=1&w=750&h=750&rs=1&pid=ImgDetMain&o=7&rm=3",
    price: 5999,
    title: "Regular fit shirt"
  },
  {
    imag1: "https://th.bing.com/th/id/OIP.L3-Ws-nwY7BPNneYpKsTSQHaHu?w=208&h=217&c=7&r=0&o=7&cb=ucfimg2&dpr=1.3&pid=1.7&rm=3&ucfimg=1",
    imag2:"https://tse4.mm.bing.net/th/id/OIP.5DqmxtEItCOat7E5qxxocgHaHa?cb=ucfimg2&ucfimg=1&w=750&h=750&rs=1&pid=ImgDetMain&o=7&rm=3",
    price: 4999,
    title: "REGULAR FIT FLORAL GUCCI"
  },
  {
    imag1: "data:image/webp;base64,UklGRhQbAABXRUJQVlA4IAgbAAAwkgCdASoOAYYBPp1Kn0ylpCKlo/HaqLATiWlsz+Bbz4q+rxxN6PXyu98dbVHvo23NiZfOb04AkTyh/RemR2DGG/5jdH9yf8NnZBFWWj9jy6nkUTKP7960vhJ/b/US6Wvk3Ezn4L0qV5jzj8WjV7/XWKp4oqmi/QAqHhUzPtv5EynD6kySl7qaYdZL7ZuasMSSv81+U8RvmlMUFOFEwDJ2hR9EVAg4DeuL/mBqFg4FD7k6rtAsRquGcUk89bTZxd4DZaBscrQrw+WIYxTYJn4vCrNvyZEyAu0Ds9gux3eS/iG3nlgL2u5YXSM5WfmSFqckkPg/EALJ4iZ256fQevu8W7WXPmzbpoW6hX757Qxu1nAtps+k8BddmHtAmfsvgc2kzyRkmBns4yKv4x/TZd51oWOV/Jog4hF2jz0qlUeCmxjD91yjb5f4QyZWO6yx03cZAfsAVorGs21EOQFXA0Nn38Ufjwqv2LsoP/YL4gNc8z421zbbrcaUAXC+gxJEcA4X50lNBA2kSJjl+l/U3HvgDaavSIBpdxPxFPGMNq4dj6YQ5kDQKLb8L/DhjbcIha+8acc3fnWqqH7T889EF7MQB3jnXbLPHLfXsX6GzwQ4jWnkLh76AqkSwCv7ekHJXjLyXOjXjcmuifcLpH5rNDGd+FsNOdwipTYMeJ40O1Gbyt4w5AVFIMHKX2uqIYMeGjVgbqM60XAsqcPRKw4OjX/XV4BT/mXCVXHOl7UUuEG6g0qdXfLGSKalxzibTa4TH+mqP1RJ6rP/D3yi8ex9aUfnCW6/n0KV8UidOcbl/K/NjhD0TbRxGCDBxL2diVvDJuNo2rNUP4lSe34ISQbNaaGpWCpwU+E+ZVw91dwzXv8OmQui+wN2NI7PKMocGYt9nb0urL5wk/rI02n9QTNG/yLtROqgNChImAJDU8c95U4bI2YDKlLS62J0WSL7mBYAQ1U4UK+nQy8v3HQBbIMtuvbTo72PMS9YLAAt/xaoOKWb1XXp5Vgv1t24BYikM/S3w3SsXqBSgg7dLfbamnI4RXPcJyuB7FDAct8GgliOe88v6buasIBcRvWfm8OAaRIiX1K89RPOwkOE9PJVLIo4fzzDlEsjGuuPLhfXwU6sMcl5QIMWsEwkZTo6TJaljSiJLBhN/6UeaiZOyCt+IBTOwG83iGWg/chWIeh1VRhTfd6/u7O/4l95peInWw9wg/GXyFPCmbXb8WYXjI5tXdWMmlpXMo3N8tG+LKmgK+9Rx6/UJbnm+stvF7FLNASfWIVWRLk6yplOimk4fBjvPUJHzSxLBHLnq8mZUNxQgvcAd36OxsExWMZFYm0gjQFZ5sXssEPeP2VZTWrdUBN9xkMV53++unKywii1KABUYThtkhi7kvnq8kt60AklFk0NJPjZpaq6/F7lVllJi7eJj78MAYEnXDn06KEQ+ukK2P7fEi5L6UCLPIp9fIA7dKcEWLMHg0sOR72iFI+PqMQMM1jSdzUJ2SylzwtNfyuQfg/mUDwoA+Q787QqggVXL81DgB/35XBQsbiSy/nVTxHHQ3E05m5yPiSsU0TIQxupwAD++VjjtClBy7gCSf7q8hxgUIyU4Y5L9S5Weo9Jn5IGUmbnUMS0yvCcW5zg39YGKOayuk7Bawd/cocZ/Q27EMawX6iRgR7/VonGUIFFxTmxwPl0mgkOIqBbMGHdC7ywxf8VluYtq+HO2QBRIFV6UAFDHfPeJ7A2Gen1RJFsFStziyOw9SvYKios84ySH76epUyRKS0SSZ5bt7HHr/gcclUar/5G1nzCAi1WmdPJfpihAlw6kTxmtn3sgKLYASZUL5M8iee5gdlRmTlANLD0rSNVa8L94jFPuNx0pT+SxxAhk+98R2z1h6zGw+lxpXg9istxsjDy97964KKqrnmMXCmIdpRJyugjyPIWeLUg0OASHBnm6x0bGbXJb2aR1T29vY8tQA/x6dpYh91w4vioUMd2kbq2xApq8aobG3wJI7cmrnEUd/11KfyG1XJ+7CX0M1GVQlIs/kO/GQ7WixyR7obDt2qIgA49IUtuZS+uB2OlC+ePPele78HmAvbrUt1xWhmQWZLGZQb1lTqxiHPUmUqihzh3wLlwaoIB53nqV473TEaBgOOtN+5YdivpvK7S8rWCbSFpRuBZpSQHYiE+BhQLixOG/+Fvvhxr1p/j+2JHOKqfstTOc1a9vfvxM2Hc8Th531i0qwh2D0q/Fb048gUzYOEUGRyabqwhOl+/gFgAABhbA0Op+ZuAuwC88nE2wgGNzlAo0vnTuSp9kTAiQtKTXs1x1WnxjMrRUh/SKnBFF7LVBESveyd9IDWlb7AajqLoReeTqpn3Gudjlxrtpz935pxlX4Cu3ZscD3vwx+zkzG9ZA9LKseMbNGpRNPNCn2IqbPz/KoaMRC0J0bDuiViftCfacKnzQ+sS75OuScRTkwIJtZZ/TLzOhq3GOe7/wQtq/eejg1Ts8dNqrZB2ZK0IwWQt+jLWpFIRhAkeyUcQY1gYG0ZFo4Fp3e4nTzkup3NbmanwoQbJNktOlr3XGMvAAAHgMkIIBlDCqJi8k9itBGHjbeyfZfVQaO4mZ6tivL9kalJTaDYIYGQnzFhd6yzZGtnjDtRPkI9xLvmUp0bjuaCApzeoX4eSMH7oL8lgur0WB6Jx6r4iTktgkN+Gvnox2LXY2PRfmqw703TV9Vs2MGLdf0qMLtBIY8p4v1TeHyWRhoANxxDQW7+TDnC2Xp2gaNyVD7T9Ie02xPICK326Y28BV3UI9gky2fH5wIOg+EY0UTE0Jsu/xqAIYIs3WHXYNzc3KURU75Zh3lx6COhXQBjx2Wtyz4RU+MoIMQpk22CHRKMi+K4PlHlQFtZ1Pd1O797AnZgAXEV33dsMOdbHW/lPyr3lcwIAh5SvY4Y4eGNvkY4f1YTrLvupcjkpTj4lMXr8Pyy8eY+rwHFevv1DVLn5/ug2N6ldja9mnFfiIXZ7+W659NL7ezhqHYtq8FPl/BNuR3GSVznvLrIg0vBNRcEM/ya2ciQwnSVNeWtZM9ozbCwiJ1zXsHQxOB9+QcqD6A4qbGH2cLQpFuHHl1KrvFpRIc6LT51VT0+BGgXeFBIWO1bJm6fXKhk3UynAN82fr+34JDUNTqiFj8LfvcKP1I8t9VEpjjG4jfgTD6QYBcU13XAWcOrpltxWP43BLexutlFtni9fq96B4NvN20ZT5xT5NsvOuuIbCN7vStJijgzyMjXzVaW1BmowLavQpY6DQfO9riOqkvPvcXmrbB/McFkG57MewDC53CWRH+42KY1u1AXrfmqyGBZm+qy0JSwGackXzvcaH4J+9y6eA2IF3XE50wqGAlNBgTulQSwHzeDws0L5grKKsGhXxwBRTmGRZGnnljj1j0JuoaeP3H2gSsiiyjEctdEQRGXmq5mlqfmp5M+L6Y36Xpo2eYhWbQqmOtCfN4JbWYnWnjNAFsXz8LSg35IQGLYseWXklU7/GkISSVGUgUx1TRqb7ueLDKWRIdz7OnJ+G4piwEP1ksGFL+cjvp/zRb29MOdOXfwe3p5sOMkYp71qEqeBN5VVeRq7lI03UqQLc05DJ+22nKL+36dVJPI6qJWgBN+O67BJ+J89ipg+9AQKsCtdeM7QMzm35uSoVeQB5A/oNwMLIF1a0PSq/Wg1uGpNiyNTaYZuaaYTb7VGW3ayjmh9LEudAV2ky5K7FuPjrCWQkouSnUJiFcB15JFdqHF5LP8txMtG5bemwapt9RPD8BnLkrzrd7/lIXzZz2qUzohA56RWTYSiobIqFjYsWRfOLN1E/cnuyNL77jGI6ZLBg1a5R+g8YgUw5hIodSYWzkK1vqk+Ke6LC+wfsswLH9wAQFHjCw6N9hMv8xjhHGauGNzYv5wIwC0CfzhIMkQoMe90hRQIzDYQdr8FPM37Fibi1sUjIwaeJ/OWbyXQEO8qQQ2BxXyiVif8tQZDBsgm7ggfqrlVEQxZIzZ8GCDmm69m5rDZ99xYX0TWtkD50Hj2cmDdO2nM7C6yFd/VM7J8nrurYBIPPWOURaAxGThp+0YaFSR6xGGGkk0bpKXdw9meqsRFvIQ6kZAWkh0tp6TH5tpojvK9V5gJs2FclaUuQfRgK6je7Nadx3HVqNn/Z9G0kM2HmLh+inxscF7x4/IW/qcfplaueuS42ZtN+1q9WwS8lKW0XPKF96eUZc7JxmRXXQngUGiE+9/AqrUl7LQMecZRIZ9IUKiDL69/1RW3WskUXpai82MAaqRVkSBDvH7Xn2ufg97nsi6Umk+RiXEOkJBMzq2FBdDWmhSHzzcKiPKKrkT4I62P7HBLlGPQqdsm2ENmkBCDbgeFD2AQ0aaP1JjV/SXuBm+Tn72riyA2fd9HYSoydUYYb5R0BQmvMjLpyEduMItv5tT730xjOxJMM3pbenG1a35R5TUxfGWLaae0idHhPeIeZBuAxtqbYgn+TMrcR+rGr490cFSAeEeiCCL/0YmIHt6BzL7k1bP8s+UY2w+67loX//udag/8gcd88Ln467OpzmBflDNSAVUie48liGrXyix0+61sWYeAApV+2iav0TknajzyMh60KwMVKgkVt3hUYJWo9ADC+Vf/tjnmiK/nSZJs1zRKsYa30hHwETybJhLm2Aqlr5+h/hvBALIDhd6m1arOUVKKA68tp23CgP9J5IXEBIS5CQBySQONboVMQCjgS1i90fgF4dreahdB8pWmFNgQrMp9rY51Gxqa3ntcIYTq8rAwaRci0FnznW3KFTp98cXjQonCaGOU1pm599q6epei0kz/wNGh1p3ESPTTR7XM3cGD+obnPqsM2tnrL9RyxprDM9drxTOZqymziE4W7kNiiaSqBwxVh231JqI/x8IfysSm0VcZh6jDCd3FZRHTvIQxkKxPg0hxHme8NYaeIniEnhHD1JEPTsbmCmK3wkwoASIiZ7Tz52kxsVlLaTPFo4gM0/Jw3MKkUpv6FcIY+njNF+e96YHDo9uoVBrCHJnHubXPoUugSSRjlz8ZGmSfW/PVF2H5c6D2N8aE+AvNRhE4c28pMZwPmjbxYxIvJ8HDvoCCnO4/hAfKzOodudxpdaDFBtgGu8jmeSDK6AY/OLAqUPvt9anfyiyClSi9Tis8a0zqvZcdiEBSudAXxz9bY84lt1lrO8fqG3C4YwOdPFdKgYV+PiTU8BJ3QDJlbPPSgNjAOjMt+4O40sQONCb4fNY5vuOv9tbRw/tU1Us+3pZ7rypDJK48vxSLz+Hd2knajqbO8D7YcOzJwx5pk01e3WY6ix3SV7zYuqJGZARpTyTbyULgO8WhhZr9S77NgHutNYea61K48jY5tB4cIFxDgLlmdap46dFyxPfkViqHgtaX4tdPVjaJTiEMEfZywhx+YH7Rt9Ez04LWBPD9P0k1j4wGBA/tmnvg2Mt6DZR//AKURvPWxzaYPMV0Qgl3mSD6JBYgB7oFQhjfVE+/5RPZ3a/3AsBY29GIj5KkyORWvkkTlNvRNjRAMgZ+hVzOW+/n0J2b/rpvIabNV7D3zV5C2MJRPaFnfUVJ4tOf3pc4J3+l36E1FRC/+u45EjzBPT0hBSf0Z3WCQ4ZHJTx6yJoV2MoTW+OglMREPDO2WvRqJHFyuT0eNp4SPOWqtq8MRo3k5+H6sqBm/ByOdgIbS2cLPb/ip3h9SzRYy0lS5ccEKGo3Pl6I1G57fK6kYxl2O4exCqYcTyVWPccT2RkfJr5PcKReUjrg6QV5qoKwCZDFgWJBUmHyM2VRMvLt+BQi9HGRbeEK9//mxMolIFTPuCstu0XeLefBVV9GCVtf9ZmLpKomxOTYw/1ej5kMJod+kMcz6FXXGGoAOV7qtxiCwjNX8GmcYSNHP7GOhRl4RIZXpqS2jbIpynatIc/ZfXFFK5HAWfh4XnNlKwERvWPIu1S8AogjIuk97bYc5WhZGa+KcjHDwQ5yOg6QqQme8vjDO7DEzr2jcilUk8rfTxSk1A/vS3vNUXmYpwjzx0p6vqznGVY6V3NgQNT2RLUGhxbbT25xe/lyx82psLeodsPh6KIu4w2OONXqVOYoSUaW21tdZmEyPpDLPznBWpxHdHTO5d3ejP+LWp8+TrtKpYla+Xx2sPb1/DJBpb6hEgonZ3eXtdTiYbLQvua/lAPJYRgw5V+d/Xx9zgWve7KFqWqL9co4PwFNBoBp5uVqTyVDWypSUiPmyH5FzXaN/e5Q5tI/LZKGqU8ybDIvuREM4Xxl2pDXzilnaaowONL1mtB9wI887PxsLN/Lv1oeKzR2EYgmcAZwzjofJIiuV21y++pDEaQxdEGYQv3+beMiuVNQQv5XQUn+e45EvvbKDH8CdeEKx+3gQA/3Lj2flekKHZKIUwEd2f3y4TY69Ldm6/WT/ZupGWQkhBUK79DUq4RXIVSkFvq09zjlfmQzrWWp2RdiQpB/rSrvuFpzMJuaiY3xMf23P62YRuVfUwoQX8hRUF9AUqu3YzXsG35hp80WmXdJDhRAEWf+2zyhx2wixFC6ADJcMhSE+RcqkWzbL5xMINOQWP3gbJmkeNZJb37MUFFM4r06FXaDxFELUxnHh8k9/r4Uy35yPfhIih+6HurWZoyzM7Sy5jbakBInHG1KVd1VaOzoQwsUPN/PNEerCs1AROtWgxMP2ioCXh2DMzCeNsNK2lW6Sh8VaNx/8IevXwp4tKim5w59yUdXo2X7CtGdOG2Q5tCEWUYIDpSN9EdJ+5KLA8CH86PZUbLqEVgLX7VpuOiudBVknL1bCcpskX08+VVZ/0By9P8672deHZ5wV3OOEJ8bcFsi6eMg/bCef95lLjYLOcF/fOnVEALKgSkC/RoZ6NHloJUr7/PXAI69J+XfaOX2mGV+XyVY+fS2vWynueZtJYQjX4hyw9PrUIyZCidKHcPfswjn+BLVJTQ/BN9SE3ltm1uI2qNv97pZ8zsP2DaU0ebUCPvcup47hQF6G0ptT0biyjKhEiWr/iVoLooQLOrrOAq/Nmd60GcHuIsKEziLv6DW2pzGUFsUOc2haEgVYDacv4tzQM716JUEXdgE2gHFDbZ/bNCYWp5wDodNqiqYYjBGAoVcgrk+N0YeIuZs7/dJfyfy4HCknqkfh59NrlMl+LBjtcxepLr374MQxFrFbi9bXTOmA+cdUEcruwBJlNpcuvgl0gT5vKTMZozIlXBU+XD/IQrpto+QJnzapSJWByyoFmcAwcb3eBziUT3f8xlqj+Z0g9MmuBbViZCYLkjaTcf081yePejTbSj8VuvskvaSxuM4SxWcHJCN+s2Q4QzoakNvK/ZFW9oGoOepnSvnqBFdCLjBH0NsWTc4ALYaP1uLxut+ItJ5NQP+i+G19OoDS9r7lqu0M8Kpsm6sn96mNuzjIufbb1+SJuJlwKjT6omK+xEecyAAEaMrpBC+iboNXsSbYnT/vGjY2ktunDS43/iFGCa33APJ7W/QMIzcqhEqH3qD4Uy+VY9c6OJ0mbzbLgu2NdVBGy746NJob49nvPx6pw9OtBQVYZ2zvXQ3JXDCfWKLTMfEwRbBZ/UV2EZNb5EKhBPZ1CgTLpAdefG8SpISSuZTgriYQHd7FrntOsxPpBopM2/WVTVGHCiEE/9F7J3dN6dDiVp3y0O0U7TNlBbfUP/RJ2s9f8PU9SnO63z9aGhok4+4/jkhvllwJ6nzptojO5svNMzCeAo14Yo6aiUsj2T7FoTAjK2B52seruF5jM+gKpc5RC3Ut8oXP1C7tKEsUoHFJGc4EUE0YvgQMSs3pCm95jDgN5G+2+ANrvKVovSOu8PC9W2orUEjdvU0FPsvSVBQA/1BukhyhJz8ENAgQNY4BysN/qOesDvZwYH5OgtjS6JKMFqeQj014vqjUcUia+vVESTfuamtz5x/zB067K3xD2ZWH9cyxYAZvukyvRlgD8s/NPeKAnlTez3QHBEaULJ49yX+dadqVhLRWRL23z5ulFFrW9Rq24Z7vTWKNNmJT0HXsVLR0HMDO9yXzGkNtVMtvsqFaDqNXBsy5EfAkq/jbWfeMCGESvEd+bwzYv7ncrBGVR/Ifcew2r8C5Opisl/ly6KFbvySg4j2mhrINT1hdBzZHbrQkEr5RvQFczNI1RnutwAT93vaahxc2tWG9H7xFmy9RqGli3zdc1nheT9RxAoeyvYO/qfCblY+D5CmRHS8oWsnpY0u8EbreTYEF5RqIXDclAnEXTrqRSLh/HgDITbt16KHHkjVsvp3fSzUqV9b4vWAk5HNIqATkuAGPBWqwUFsr5x/+rlI4WxZmmMDCcov0mYIP+trtCw0DyGkkkTDOZfhMdyFFpDTNww8PCHotXO8ZNxKIG4Bks7fz1qj8I3ImBxvJmlvNNKyoEx2HbbjeTvSMuA7R//I3XIkhDFpWaii4lO2ZqS+kY2FjE9n0SrXijdAnKXWKSv1iIDKnTVHLRsrEy5303jdUO0XrCvQedc5xPzKayun84HuV8WIyznhAykDMRLDF9ru1V1bd7lr+A3xdYNn7b4BvsAiUBqzlMLaXGutuAJ+S0q+R/Mlzt/JJi8s48bBjtLBaWY6UPtLcTI3nyX6YERLDA+aqAyCVrXgV8fPUqyTr3pD3gP+kAQ3HNjSrYVHQICcTnLtrmhyZkeS4QIBqjxtIbq51U/lHmTtswOqNzI7omD2LTjmZF8ntp8cXrngKWl/c8Ao9xTM9FBsQGSuiTVADC8vDohea+2Va6394wq1nziWQ9mO5rUicnon3pmLlLfdo7hCZC3RxPAUlCju+6kfGm/tBuGJ3UePlZ+onqF/vgFkl33H+z40K1f3h40laHtks/t+hdz7oxQuFZ4iRqpHvIadwwQ4jTwT6flo9vm9Y/hPm9MMC6CoMyLrTar8A/2jILj34JliDzouBv204dI6I3GTcY/m2b5a98Yq0vPAE/8+BzEDAdLAmrrSBppnZobWbsFi1wPJs/cpwzQiXmrB2qqaCx9FUBQtRNznZFkgCl2OOnMR/Xoj0TjgFsGc341cUCD5R0YfPC6XUueROknZ5VMbMJEKSHNb5gHHzUX3lHnklApOV0SZr8/1Q4HfLu1xUyY+0RH5Q0QhU9C0kHJRJvumO9ZQm5eIPFdUg7uGRgRkj5YiJjd304CarPyZa8CPF19s+XzHr8vGnchd7cHTbarOELD91+Re+5WR7sls/Mwob66L1TAx5RH81J3M9sfq0tR4IEX98FW6OM3M+CEY+FLY7gAZslLKgAAAAA==",
    imag2:"https://tse4.mm.bing.net/th/id/OIP.5DqmxtEItCOat7E5qxxocgHaHa?cb=ucfimg2&ucfimg=1&w=750&h=750&rs=1&pid=ImgDetMain&o=7&rm=3",
    price: 3999,
    title: "US Polo Hoddie"
  },
  
    {
    imag1: "https://th.bing.com/th/id/OIP.2JRygA7IfGldpSt0S5hsBwHaLH?w=204&h=306&c=7&r=0&o=7&cb=ucfimg2&dpr=1.3&pid=1.7&rm=3&ucfimg=1",
    imag2:"https://tse4.mm.bing.net/th/id/OIP.5DqmxtEItCOat7E5qxxocgHaHa?cb=ucfimg2&ucfimg=1&w=750&h=750&rs=1&pid=ImgDetMain&o=7&rm=3",
    price: 2999,
    title: "H&M Baggy pahts"
  }
  ,
  
    {
    imag1: "https://th.bing.com/th/id/OIP.J0Bfq3vXgWzBO_Nxtb-qGwHaHa?w=204&h=204&c=7&r=0&o=7&cb=ucfimg2&dpr=1.3&pid=1.7&rm=3&ucfimg=1",
    imag2:"https://tse4.mm.bing.net/th/id/OIP.5DqmxtEItCOat7E5qxxocgHaHa?cb=ucfimg2&ucfimg=1&w=750&h=750&rs=1&pid=ImgDetMain&o=7&rm=3",
    price: 1999,
    title: "PUMA casuals t-shirt"
  },
  {
    imag1: "https://th.bing.com/th/id/OIP.Mrm9XQTykCbbpRi63cwJ9AHaHa?w=206&h=206&c=7&r=0&o=7&cb=ucfimg2&dpr=1.3&pid=1.7&rm=3&ucfimg=1",
    imag2:"https://tse4.mm.bing.net/th/id/OIP.5DqmxtEItCOat7E5qxxocgHaHa?cb=ucfimg2&ucfimg=1&w=750&h=750&rs=1&pid=ImgDetMain&o=7&rm=3",
    price: 5999,
    title: "Adidas Adicolor hoddie"
  },
{
  
    imag1: "https://cdn.shopify.com/s/files/1/0752/6435/files/IMG_0533_7b3164e7-051d-4ac2-af08-483e146ba525_900x.jpg?v=1743582983",
    imag2:"https://tse4.mm.bing.net/th/id/OIP.5DqmxtEItCOat7E5qxxocgHaHa?cb=ucfimg2&ucfimg=1&w=750&h=750&rs=1&pid=ImgDetMain&o=7&rm=3",
    price: 5999,
    title: "Regular floral Shirt"
  
}
  

];
function ProductList() {
  return (
    <section className="main-card" >
      {products.map((item, index) => (
        <ProductCard
          key={index}
          image1 = {item.imag1}
          image2={item.imag2}
          title={item.title}
          price={item.price}
        />
      ))}
    </section>
  );
}

export default ProductList;

export function Content1(){
  return(
    <section className="media">
      {/* <video controls autoPlay>
        <source src="Armani.mp4"/>
      </video> */}

      <video controls>
        <source src={audio}/>
      </video>
    
      <div className="media-">
      <h2>ARMANI EXCHANGE</h2>
      <p>Known for its cutting-edge designs and high-quality craftsmanship</p>
      </div>
    </section>
  )
}