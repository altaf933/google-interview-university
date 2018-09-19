#include<iostream>
using namespace std;
int main() {

// check power of two
int a = 16;
if ((a & (a - 1)) == 0){
  cout<<"This is a power of two"<<endl;
} else {
  cout<<"This is not power of two"<<endl;
}
// Check bit is set or not
int number = 5;
int pos = 1;
if(number & (1 << pos)) {
    cout<<"SET"<<endl;
} else {
  cout<<"Not SET"<<endl;
} 
return 0;
}
